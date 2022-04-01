import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color.model';
import { ColorObject } from 'src/app/models/colorobject.model';
import { ColorService } from 'src/app/service/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  public colors! : ColorObject[];
  public openModal = false;
  public currentColor! : ColorObject;

  constructor( private colorService : ColorService ) { }
  
  ngOnInit(): void {
    this.getColors();
  }

  getColors(){
    this.colorService.getColor()
    .subscribe(resp => {
      this.colors = resp.data;
    });
  }

  onAddColor(color : ColorObject){
    this.colors.push(color);
  }

  onEditColor(color : ColorObject){
    this.currentColor = color;
    this.openModal = true;
  }

  onDeleteColor(color : ColorObject){
    this.colorService.deleteColor(color)
    .subscribe(resp => {
      console.log(resp);
      this.colors = this.colors.filter(comp => color.id !== comp.id);
    })
  }

  onOpenModal(){
    this.openModal = true;
  }

  onCloseModal(){
    this.openModal = false;
  }
}
