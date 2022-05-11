import { Component, Input, OnInit } from '@angular/core';
import { IImageDTO } from 'src/app/models/i-imageDTO';
import { IProductModel } from 'src/app/models/i-product-model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-car-item',
  templateUrl: './car-item.component.html',
  styleUrls: ['./car-item.component.scss']
})
export class CarItemComponent implements OnInit {
  @Input() product!: IProductModel;
  apiPath = environment.apiPath;
  thumbImg!: IImageDTO | undefined;
  brandLogo!: IImageDTO | undefined;

  constructor() { }

  ngOnInit(): void {
    this.getImgThumb();
  }

  getImgThumb(): void {
    this.thumbImg = this.product.imageDTOs?.find(img => img.type == 'thumbnail');
  }

  getBrandLogo(): void {
    this.brandLogo = this.product.brandDTO?.imageDTOs?.find(img => img.type == 'logo');
  }

  getTimeStamp() {
    return new Date().getTime();
  }
}
