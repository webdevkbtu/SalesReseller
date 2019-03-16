import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  //collBackImg: string[];

  constructor() { }

  ngOnInit() {
    //collBackImg = ["/assets/images/winter.jpg","/assets/images/krosy.jpg","/assets/images/posuda.jpg"];
  }

}
