import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
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

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
}
