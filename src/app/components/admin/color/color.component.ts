import { Component, OnInit } from '@angular/core';
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
      this.colors.sort((a, b) => a.desc_es!.localeCompare(b.desc_es!))
    });
  }

  onAddColor(color : ColorObject){
    let colorFinded = this.colors.filter(colorCreated => {
      colorCreated.id === color.id;
    })
    if (colorFinded.length < 0) {
      this.colors.push(color);
    } else {
      this.onUpdateColor(color);
    }
    this.openModal = false;
  }

  onUpdateColor(color : ColorObject){

  }

  onEditColor(color : ColorObject){
    this.currentColor = color;
    this.openModal = true;
  }

  onDeleteColor(color : ColorObject){
    this.colorService.deleteColor(color)
    .subscribe(resp => {
      this.colors = this.colors.filter(comp => color.id !== comp.id);
    })
  }

  onOpenModal(){
    this.openModal = true;
  }

  onCloseModal(){
    this.openModal = false;
    this.currentColor = {};
  }
}
