import { Component, OnInit } from '@angular/core';
import { ICartModel } from 'src/app/models/i-cart-model';

@Component({
  selector: 'app-user-cart-modal',
  templateUrl: './user-cart-modal.component.html',
  styleUrls: ['./user-cart-modal.component.scss']
})
export class UserCartModalComponent implements OnInit {
  listUserCartItems: ICartModel[] = [
    {
      name: 'Xe điện',
      price: 1050400,
      image: 'https://choxe.net/blog/wp-content/uploads/2019/01/Mercedes-Benz.png',
      quantity: 1,
    },
    {
      name: 'Xe điện',
      price: 1000000,
      image: 'https://cafefcdn.com/thumb_w/650/203337114487263232/2022/3/22/photo1647918565447-1647918565543359042692.jpg',
      quantity: 1,
    },
    {
      name: 'Xe điện',
      price: 1000000,
      image: 'https://cafefcdn.com/thumb_w/650/203337114487263232/2022/3/22/photo1647918565447-1647918565543359042692.jpg',
      quantity: 1,
    },
    {
      name: 'Xe điện',
      price: 1000000,
      image: 'https://cafefcdn.com/thumb_w/650/203337114487263232/2022/3/22/photo1647918565447-1647918565543359042692.jpg',
      quantity: 1,
    },
    {
      name: 'Xe điện',
      price: 1000000,
      image: 'https://cafefcdn.com/thumb_w/650/203337114487263232/2022/3/22/photo1647918565447-1647918565543359042692.jpg',
      quantity: 1,
    },
    {
      name: 'Xe điện',
      price: 1000000,
      image: 'https://cafefcdn.com/thumb_w/650/203337114487263232/2022/3/22/photo1647918565447-1647918565543359042692.jpg',
      quantity: 1,
    },
    {
      name: 'Xe điện',
      price: 1000000,
      image: 'https://cafefcdn.com/thumb_w/650/203337114487263232/2022/3/22/photo1647918565447-1647918565543359042692.jpg',
      quantity: 1,
    },
    {
      name: 'Xe điện',
      price: 1000000,
      image: 'https://cafefcdn.com/thumb_w/650/203337114487263232/2022/3/22/photo1647918565447-1647918565543359042692.jpg',
      quantity: 1,
    },
    {
      name: 'Xe điện',
      price: 1000000,
      image: 'https://cafefcdn.com/thumb_w/650/203337114487263232/2022/3/22/photo1647918565447-1647918565543359042692.jpg',
      quantity: 1,
    },

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
