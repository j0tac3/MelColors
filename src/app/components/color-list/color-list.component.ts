import { Component, Input, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color.model';

@Component({
  selector: 'app-color-list',
  templateUrl: './color-list.component.html',
  styleUrls: ['./color-list.component.css']
})
export class ColorListComponent implements OnInit {
  @Input() colors! : Color[];

  constructor() { }

  ngOnInit(): void {
  }

}
