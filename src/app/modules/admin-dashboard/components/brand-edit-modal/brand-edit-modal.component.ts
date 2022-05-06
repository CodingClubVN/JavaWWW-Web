import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IBrandModel } from 'src/app/models/i-brand-model';
import { IImageDTO } from 'src/app/models/i-imageDTO';
import { BrandService } from 'src/app/services/brand/brand.service';
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
  selector: 'app-brand-edit-modal',
  templateUrl: './brand-edit-modal.component.html',
  styleUrls: ['./brand-edit-modal.component.scss']
})
export class BrandEditModalComponent implements OnInit {
  addBrandForm!: FormGroup;
  selectedFile!: ImageSnippet;
  previewImg!: any;

  constructor(
    public dialogRef: MatDialogRef<BrandEditModalComponent>,
    private imageService: ImageService,
    private brandService: BrandService,
    @Inject(MAT_DIALOG_DATA) public brand: IBrandModel
  ) {
    this.addBrandForm = this.initForm();
  }

  ngOnInit(): void {
    this.previewImg = document.getElementById('preview-img');
    this.getLogoImg();
  }

  initForm(): FormGroup {
    return new FormGroup({
      name: new FormControl(this.brand.name, Validators.required),
      country: new FormControl(this.brand.country, Validators.required),
      founderYear: new FormControl(this.brand.founderYear, Validators.required),
      description: new FormControl(this.brand.description, Validators.required)
    })
  }

  getLogoImg(): void {
    this.brand?.imageDTOs?.forEach((img: IImageDTO) => {
      if (img.type == 'logo') {
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
    this.createNewBrand();
  }

  onUpdate() {
    this.updateBrand();
  }

  onDelete() {
    const id = this.brand.id ? this.brand.id : 0;
    if (confirm('Bạn có chắc chắn muốn xóa hãng này và tất cả sản phẩm của hãng?') == true) {
      this.brandService.deleteBrand(id).subscribe(() => {
        this.dialogRef.close(true);
      });
    }
  }

  updateBrand() {
    const brand = this.addBrandForm.getRawValue();
    this.brandService.updateBrand(this.brand.id ? this.brand.id : 0, brand).subscribe(res => {
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

  createNewBrand() {
    const brand = this.addBrandForm.getRawValue();
    this.brandService.newBrand(brand).subscribe(res => {
      console.log(res);
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
