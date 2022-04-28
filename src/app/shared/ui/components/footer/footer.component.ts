import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  companyInformation = {
    name: 'Coding Club Showroom',
    logo: '',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,'
  };

  carBrands = [
    {
      name: 'Mercedes',
      path: 'mercedes'
    },
    {
      name: 'Huyndai',
      path: 'huyndai'
    },
    {
      name: 'Mazda',
      path: 'mazda'
    },
    {
      name: 'BMW',
      path: 'bmw'
    }
  ];

  socialMedia = [
    {
      name: 'Facebook',
      icon: 'fa-facebook-f',
      path: 'codingclubshowroom'
    },
    {
      name: 'Twitter',
      icon: 'fa-twitter',
      path: 'codingclubshowroom'
    },
    {
      name: 'Google',
      icon: 'fa-google',
      path: 'codingclubshowroom'
    },
    {
      name: 'Instagram',
      icon: 'fa-instagram',
      path: 'codingclubshowroom'
    },
    {
      name: 'LinkedIn',
      icon: 'fa-linkedin',
      path: 'codingclubshowroom'
    },
    {
      name: 'Github',
      icon: 'fa-github',
      path: 'codingclubshowroom'
    }
  ]

  contacts = [
    {
      name: 'Address',
      icon: 'fa-home',
      value: 'F4, Go Vap, HCMC',
    },
    {
      name: 'Email',
      icon: 'fa-envelope',
      value: 'contact@codingclub.com'
    },
    {
      name: 'Phone',
      icon: 'fa-phone',
      value: '0123456789'
    },
    {
      name: 'Fax',
      icon: 'fa-print',
      value: '000-000-000'
    }
  ];

  privacies = [
    {
      name: '',
      path: ''
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
