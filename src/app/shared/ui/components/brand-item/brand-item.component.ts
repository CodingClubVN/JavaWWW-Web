import { AfterContentInit, Component, Input, OnInit } from '@angular/core';
import { IBrandModel } from 'src/app/models/i-brand-model';
import { IImageDTO } from 'src/app/models/i-imageDTO';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-brand-item',
  templateUrl: './brand-item.component.html',
  styleUrls: ['./brand-item.component.scss']
})
export class BrandItemComponent implements OnInit, AfterContentInit {
  @Input() brand!: IBrandModel;
  apiPath = environment.apiPath;
  logoImg!: IImageDTO;
  currentTimeStamp = this.getTimeStamp();
  imageURL = '';

  constructor() { }
  ngAfterContentInit(): void {
    this.getLogoImg();
  }

  ngOnInit(): void {
    this.getLogoImg();
  }

  getLogoImg(): void {
    this.currentTimeStamp = this.getTimeStamp();
    this.brand?.imageDTOs?.forEach((img: IImageDTO) => {
      if(img.type == 'logo')
        this.logoImg = img;
        this.imageURL = this.logoImg?.id + '?q=' + this.currentTimeStamp;
    })
  }

  getTimeStamp() {
    return new Date().getTime().toString();
  }
}
