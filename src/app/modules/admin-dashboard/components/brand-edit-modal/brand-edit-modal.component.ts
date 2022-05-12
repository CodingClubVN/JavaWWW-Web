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
  imgId: number = 0;
  currentTimeStamp = this.getTimeStamp();

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
      name: new FormControl(this.brand.name, [Validators.required, Validators.pattern(/^[a-zA-Z0-9-ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý,\. ]+$/)]),
      country: new FormControl(this.brand.country, [Validators.required, Validators.pattern(/^[a-zA-Z-ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý,\. ]+$/)]),
      founderYear: new FormControl(this.brand.founderYear, [Validators.required, Validators.min(1800), Validators.max(2022), Validators.pattern(/^[0-9]{4}$/)]),
      description: new FormControl(this.brand.description, [Validators.required, Validators.pattern(/^[a-zA-Z0-9-ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý,\. ]+$/)])
    })
  }

  getLogoImg(): void {
    this.brand?.imageDTOs?.forEach((img: IImageDTO) => {
      if (img.type == 'logo') {
        this.previewImg.style.backgroundImage = `url(${environment.apiPath}/images/${img.id}?q=${this.currentTimeStamp})`;
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
        if (!this.selectedFile?.pending) {
          this.dialogRef.close(true)
        }
        if(this.imgId !== 0) {
          this.updateImage(this.imgId);
        } else {
          this.uploadImage(body);
        }
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
    if (this.selectedFile?.pending) {
      this.imageService.uploadImage(this.selectedFile.file, body).subscribe(
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

  updateImage(id: number) {
    this.currentTimeStamp = this.getTimeStamp();
    if (this.selectedFile?.pending) {
      this.imageService.updateImage(this.selectedFile.file, id).subscribe(
        res => {
          this.onSuccess(),
            this.dialogRef.close(true),
            this.getLogoImg()
      },
        err => {
          this.onError(),
            this.dialogRef.close(false)
        }
      )
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
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
