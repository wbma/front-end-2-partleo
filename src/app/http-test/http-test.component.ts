import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.scss']
})
export class HttpTestComponent implements OnInit {
  someData:string = 'hello';
  imgUrl;
  imageFolder:string = 'http://media.mw.metropolia.fi/wbma/uploads/';
  constructor(private http:HttpClient) {

  }

  getJSON() {
    interface MyInterface {
      license: string;
    }
    this.http.get<MyInterface>('assets/package.json').subscribe((res) => {
      console.log(res);
      this.someData = res.license;
    });
  }

  getMedia() {
    this.http.get('http://media.mw.metropolia.fi/wbma/media').subscribe((res) => {
      this.imgUrl = res;
    });
  }

  ngOnInit() {
    this.getJSON();
    this.getMedia();
  }

}
