import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/_core/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  apiPath = environment.apiPath;
  imgId = '3';

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
  }

  getData() {
    let result = '';
    const path = 'https://8c99-171-252-153-194.ap.ngrok.io/music/'
    this.apiService.get(path)
      .subscribe(data => {
        result = data;
        console.log(result);
      });
  }

}
