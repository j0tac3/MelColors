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

  constructor( private colorService : ColorService ) { }
  
  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies(){
    this.colorService.getColor()
    .subscribe(resp => {
      this.colors = resp.data;
    });
  }

  onAddColor(color : ColorObject){
    this.colors.push(color);
  }

  onOpenModal(){
    this.openModal = true;
  }

  onCloseModal(){
    this.openModal = false;
  }
}
