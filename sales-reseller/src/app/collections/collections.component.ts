import {Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {
  @Input() backimg: string;
  @Input() textOne: string;
  @Input() textTwo: string;
  constructor() { }

  ngOnInit() {
  }

}
