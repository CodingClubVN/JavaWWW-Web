import { Component, OnInit } from '@angular/core';
import { FooterMenuConfig } from '../../../../configs/footer-config';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  companyInformation = FooterMenuConfig.companyInformation;
  carBrands = FooterMenuConfig.carBrands;
  socialMedia = FooterMenuConfig.socialMedia;
  contacts = FooterMenuConfig.contacts;
  privacies = FooterMenuConfig.privacies;

  constructor() { }

  ngOnInit(): void {
  }

}
