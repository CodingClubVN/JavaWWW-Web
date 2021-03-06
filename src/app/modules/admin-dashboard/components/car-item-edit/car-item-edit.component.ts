import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IBrandModel } from 'src/app/models/i-brand-model';
import { IImageDTO } from 'src/app/models/i-imageDTO';
import { IProductModel } from 'src/app/models/i-product-model';
import { BrandService } from 'src/app/services/brand/brand.service';
import { ProductService } from 'src/app/services/product/product.service';
import { ImageService } from 'src/app/services/_core/image.service';
import { environment } from 'src/environments/environment';
import {CategoryService} from "../../../../services/category/category.service";
import {ICategoryDTOModel} from "../../../../models/i-category-dto-model";

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
export class CarItemEditComponent implements OnInit{
  addProductForm!: FormGroup;
  selectedFile!: ImageSnippet;
  previewImg!: any;
  listBrand!: IBrandModel[];
  categories!: ICategoryDTOModel[];
  imgId = 0;
  currentTimestamp = this.getTimeStamp();

  constructor(
    public dialogRef: MatDialogRef<CarItemEditComponent>,
    private imageService: ImageService,
    @Inject(MAT_DIALOG_DATA) public product: IProductModel,
    private productService: ProductService,
    private brandService: BrandService,
    private categoryService: CategoryService
  ) {
    this.addProductForm = this.initProductForm();
  }

  ngOnInit(): void {
    this.previewImg = document.getElementById('preview-img');
    this.getLogoImg();
    this.brandService.getBrands().subscribe(list => this.listBrand = list);
    this.categoryService.getCategories().subscribe(list => this.categories = list);
  }

  initProductForm(): FormGroup {
    return new FormGroup({
      name: new FormControl(this.product.name ? this.product.name : '', [Validators.required, Validators.pattern(/^[a-zA-Z0-9-?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????,\. ]+$/)]),
      price: new FormControl(this.product.price ? this.product.price : '', [Validators.required, Validators.pattern(/^[0-9]+$/)]),
      bodyType: new FormControl(this.product.bodyType ? this.product.bodyType : '', [Validators.required, Validators.pattern(/^[a-zA-Z0-9-?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????,\. ]+$/)]),
      fuelType: new FormControl(this.product.fuelType ? this.product.fuelType : '', [Validators.required, Validators.pattern(/^[a-zA-Z0-9-?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????,\. ]+$/)]),
      brandId: new FormControl(this.product.brandDTO?.id ? this.product.brandDTO.id : 4, Validators.required),
      categoryId: new FormControl(this.product.categoryDTO?.id ? this.product.categoryDTO.id : 4, Validators.required)
    })
  }

  getLogoImg(): void {
    this.product?.imageDTOs?.forEach((img: IImageDTO) => {
      if (img.type == 'thumbnail') {
        this.previewImg.style.backgroundImage = `url(${environment.apiPath}/images/${img.id}?q=${this.currentTimestamp})`;
        this.previewImg.style.backgroundSize = '100% 100%';
        this.imgId = img.id ? img.id : 0;
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
    if (confirm('B???n c?? ch???c ch???n mu???n x??a m???u xe n??y?')) {
      this.productService.deleteProduct(id).subscribe(() => {
        this.dialogRef.close(true);
      });
    }
  }

  updateProduct() {
    const product = this.addProductForm.getRawValue();
    const formValue = {
      id: this.product?.id,
      name: product.name,
      price: parseInt(product.price),
      fuelType: product.fuelType,
      bodyType: product.bodyType,
      brand: {
        id: parseInt(product.brandId)
      },
      category: {
        id: parseInt(product.categoryId)
      }
    }
    this.productService.updateProduct(formValue).subscribe(res => {
      if (res) {
        const body = {
          productId: res.id,
          brandId: res.brandDTO?.id,
          type: 'thumbnail'
        }
        if(!this.selectedFile?.pending) {
          this.dialogRef.close(true)
        }
        if(this.imgId != 0) {
          this.updateImage(this.imgId);
        } else {
          this.uploadImage(body);
        }
      } else {
        this.dialogRef.close(false);
      }
    })
  }

  createNewProduct() {
    const product = this.addProductForm.getRawValue();
    const formValue = {
      name: product.name,
      price: parseInt(product.price),
      fuelType: product.fuelType,
      bodyType: product.bodyType,
      brand:{
        id: parseInt(product.brandId)
      },
      category:{
        id: parseInt(product.categoryId)
      }
    }
    this.productService.createProduct(formValue).subscribe(res => {
      console.log(res);
      if (res) {
        const body = {
          productId: res.id,
          brandId: res.brandDTO?.id,
          type: 'thumbnail'
        }
        if (!this.selectedFile?.pending) {
          this.dialogRef.close(true)
        }
        this.uploadImage(body);
      } else {
        this.dialogRef.close(false);
      }
    })
  }

  uploadImage(body: any) {
    this.currentTimestamp = this.getTimeStamp();
    if (this.selectedFile?.pending) {
      this.imageService.uploadImage(this.selectedFile.file, body).subscribe(
        res => {
          this.onSuccess(),
          this.dialogRef.close(true),
          this.getLogoImg();
        },
        err => {
          console.log(err);
          this.onError(),
          this.dialogRef.close(false)
        }
      )
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  updateImage(id: number) {
    if (this.selectedFile?.pending) {
      this.imageService.updateImage(this.selectedFile.file, id).subscribe(
        res => {
          this.onSuccess(),
            this.dialogRef.close(true)
        },
        err => {
          this.onError(),
            this.dialogRef.close(false)
        }
      )
    }
  }

  getTimeStamp() {
    return new Date().getTime().toString();
  }

  isControlValid(formGroup: FormGroup, controlName: string): boolean {
    const control = formGroup.controls[controlName];
    return control.valid && (control.dirty || control.touched);
  }

  isControlInvalid(formGroup: FormGroup, controlName: string): boolean {
    const control = formGroup.controls[controlName];
    return control.invalid && (control.dirty || control.touched);
  }
}
