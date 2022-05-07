import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IBrandModel } from 'src/app/models/i-brand-model';
import { IImageDTO } from 'src/app/models/i-imageDTO';
import { IProductModel } from 'src/app/models/i-product-model';
import { BrandService } from 'src/app/services/brand/brand.service';
import { ProductService } from 'src/app/services/product/product.service';
import { ImageService } from 'src/app/services/_core/image.service';
import { environment } from 'src/environments/environment';

class ImageSnippet {
  pending: boolean = false;
  status: string = 'init';
  constructor(
    public src: string,
    public file: File
  ) { }
}

@Component({
  selector: 'app-car-item-edit',
  templateUrl: './car-item-edit.component.html',
  styleUrls: ['./car-item-edit.component.scss']
})
export class CarItemEditComponent implements OnInit {
  addProductForm!: FormGroup;
  selectedFile!: ImageSnippet;
  previewImg!: any;
  listBrand!: IBrandModel[];
  categories = [
    {
      id: 4,
      name: 'SUV'
    },
    {
      id: 5,
      name: 'Sedan'
    }
  ];

  constructor(
    public dialogRef: MatDialogRef<CarItemEditComponent>,
    private imageService: ImageService,
    @Inject(MAT_DIALOG_DATA) public product: IProductModel,
    private productService: ProductService,
    private brandService: BrandService
  ) {
    this.addProductForm = this.initProductForm();
  }

  ngOnInit(): void {
    this.previewImg = document.getElementById('preview-img');
    this.getLogoImg();
    this.brandService.getBrands().subscribe(list => this.listBrand = list);
  }

  initProductForm(): FormGroup {
    return new FormGroup({
      name: new FormControl(this.product.name ? this.product.name : '', Validators.required),
      price: new FormControl(this.product.price ? this.product.price : '', Validators.required),
      bodyType: new FormControl(this.product.bodyType ? this.product.bodyType : '', Validators.required),
      fuelType: new FormControl(this.product.fuelType ? this.product.fuelType : '', Validators.required),
      brandId: new FormControl(this.product.brandDTO?.id ? this.product.brandDTO.id : '', Validators.required),
      categoryId: new FormControl(this.product.categoryDTO?.id ? this.product.categoryDTO.id : this.categories[0], Validators.required)
    })
  }

  getLogoImg(): void {
    this.product?.imageDTOs?.forEach((img: IImageDTO) => {
      if (img.type == 'thumbnail') {
        this.previewImg.style.backgroundImage = `url(${environment.apiPath}/images/${img.id})`;
        this.previewImg.style.backgroundSize = '100% 100%';
      }
    })
  }

  onSuccess() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'ok';
  }

  onError() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'fail';
    this.selectedFile.src = '';
  }

  processLogoImg(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.addEventListener('load', (event: any) => {
      this.selectedFile = new ImageSnippet(event.target.result, file);
      this.selectedFile.pending = true;
      this.previewImg.style.backgroundImage = `url(${this.selectedFile.src})`;
      this.previewImg.style.backgroundSize = '100% 100%';
    });
  }

  onSubmit() {
    this.createNewProduct();
  }

  onUpdate() {
    this.updateProduct();
  }

  onDelete() {
    const id = this.product.id ? this.product.id : 0;
    if (confirm('Bạn có chắc chắn muốn xóa hãng này và tất cả sản phẩm của hãng?') == true) {
      this.productService.deleteProduct(id).subscribe(() => {
        this.dialogRef.close(true);
      });
    }
  }

  updateProduct() {
    const product = this.addProductForm.getRawValue();
    this.productService.updateProduct(product).subscribe(res => {
      if (res) {
        const body = {
          brandId: res.id?.toString(),
          type: 'logo'
        }
        this.uploadImage(body);
        this.dialogRef.close(true);
      } else {
        this.dialogRef.close(false);
      }
    })
  }

  createNewProduct() {
    const product = this.addProductForm.getRawValue();
    this.productService.createProduct(product).subscribe(res => {
      console.log(res);
      if (res) {
        const body = {
          // to do
        }
        this.uploadImage(body);
        this.dialogRef.close(true);
      } else {
        this.dialogRef.close(false);
      }
    })
  }

  uploadImage(body: any) {
    if (this.selectedFile?.pending) {
      this.imageService.uploadImage(this.selectedFile.file, body).subscribe(
        res => {
          this.onSuccess()
        },
        err => {
          this.onError()
        }
      )
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
