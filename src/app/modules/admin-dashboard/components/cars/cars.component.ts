import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})

export class CarsComponent implements OnInit {
  // fake data
  listCars = [
    {
      name: 'Vinfast VF8',
      brand: 'Vinfast',
      price: 500,
      quantity: 10
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  editCar(car: any) {
    console.log('edited' + car.name);
  }

  deleteCar(car: any) {
    console.log('deleted' + car.name)
  }
}
