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

  // fileUpload(event: any) {
  //   if (event.target.files) {
  //     let reader = new FileReader();
  //     selectedFile = event.target.files[0];
  //     let imgSize = (selectedFile.size / 1024 / 1024).toFixed(2);
  //     imgSizeText.innerText = imgSize;
  //     reader.readAsDataURL(event.target.files[0]);
  //     reader.onload = (event) => {
  //       imgUrl = event.target.result;
  //       previewImage.setAttribute('src', imgUrl);
  //       previewImage.style.width = '150px';
  //     }
  //     if (imgSize > 9.8) {
  //       fileCheckerMessage.innerText = 'File nặng qua trên 10MB rồi';
  //       fileCheckerMessage.setAttribute('class', 'text-danger');
  //     }
  //     else {
  //       fileCheckerMessage.innerText = 'Ổn áp đó Submit đi';
  //       fileCheckerMessage.setAttribute('class', 'text-success');
  //     }
  //   }
  // }

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
