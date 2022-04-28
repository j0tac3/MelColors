import { Component, Input, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color.model';
import { ColorObject } from 'src/app/models/colorobject.model';

@Component({
  selector: 'app-color-card',
  templateUrl: './color-card.component.html',
  styleUrls: ['./color-card.component.css']
})
export class ColorCardComponent implements OnInit {
  @Input() color! : ColorObject;
  public isLargeColor = false;

  constructor() { }

  ngOnInit(): void {
  }

  onAddFavourite(){
    //this.color.isFavourite = !this.color.isFavourite;
  }

  onAddColor(){
    //this.color.itHasColor = !this.color.itHasColor;
  }

  onChangeColorLevel(){
    /* const newLevel = this.color.level_color! + 35;
    if(newLevel < 100){
      this.color.level_color! = newLevel;
    } else if(this.color.level_color === 100){
      this.color.level_color = 1;
    } else {
      this.color.level_color = 100;
    } */
  }

  onLargeColor(){
    this.isLargeColor = !this.isLargeColor;
  }

}
