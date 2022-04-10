import { Component, Input, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color.model';
import { ColorObject } from 'src/app/models/colorobject.model';

@Component({
  selector: 'app-color-list',
  templateUrl: './color-list.component.html',
  styleUrls: ['./color-list.component.css']
})
export class ColorListComponent implements OnInit {
  @Input() colors! : ColorObject[];

  constructor() { }

  ngOnInit(): void {
  }

}
