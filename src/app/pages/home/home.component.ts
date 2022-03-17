import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private colors = [
    new Color(new Object({number:'70.951',description_en:'White',description_es:'Blanco', color:'#ffffff', level_color:0, isFavourite:false, itHasColor:false})),
    new Color(new Object({number:'70.919',description_en:'Cold White',description_es:'Blanco Frio',color:'#ffffff', level_color:0, isFavourite:false, itHasColor:false})),
    new Color(new Object({number:'70.842',description_en:'Gloss White',description_es:'Blanco Brillo', color:'#f5f3f4', level_color:0, isFavourite:false, itHasColor:false})),
    new Color(new Object({number:'70.820',description_en:'Off-White',description_es:'Blanco Pergamino', color:'#ebebe1', level_color:0, isFavourite:false, itHasColor:false})),
    new Color(new Object({number:'70.918',description_en:'Ivory',description_es:'Hueso', color:'#f2eed1', level_color:0, isFavourite:false, itHasColor:false})),
    new Color(new Object({number:'70.928',description_en:'Light Flesh',description_es:'Carne Clara', color:'#f8d9c7', level_color:0, isFavourite:false, itHasColor:false})),
    new Color(new Object({number:'70.837',description_en:'Pale Sand',description_es:'Arena Clara', color:'#f4d7b5', level_color:0, isFavourite:false, itHasColor:false})),
    new Color(new Object({number:'70.917',description_en:'Beige',description_es:'Beige', color:'#daba81', level_color:0, isFavourite:false, itHasColor:false})),
    new Color(new Object({number:'70.916',description_en:'Sand Yellow',description_es:'Amarillo Arena', color:'#e4b86f', level_color:0, isFavourite:false, itHasColor:false})),
    new Color(new Object({number:'70.949',description_en:'Light Yellow',description_es:'Amarillo Claro', color:'#fce856', level_color:0, isFavourite:false, itHasColor:false})),
    new Color(new Object({number:'70.952',description_en:'Lemon Yellow',description_es:'Amarillo Limon', color:'#fbea20', level_color:0, isFavourite:false, itHasColor:false})),
    new Color(new Object({number:'70.806',description_en:'German Yellow',description_es:'Amarillo Lasur', color:'#cbbe78', level_color:0, isFavourite:false, itHasColor:false})),
    new Color(new Object({number:'70.858',description_en:'Ice Yellow',description_es:'Amarillo Ice', color:'#f7d897', level_color:0, isFavourite:false, itHasColor:false})),
    new Color(new Object({number:'70.915',description_en:'Ice Yellow',description_es:'Amarillo Ice', color:'#ffe20e', level_color:0, isFavourite:false, itHasColor:false})),
  ];

  public colorToSee! : Color[];

  constructor() { }

  ngOnInit(): void {
    this.colorToSee = this.colors;
  }

  onTextToSearch(text : any){
    if (text !== ''){
      this.colorToSee = this.filterItems(text);
    } else {
      this.colorToSee = this.colors;
    }
  }
  
  filterItems(query : string) {
    return this.colors.filter(function(color) {
        return color.number!.toLowerCase().indexOf(query.toLowerCase()) > -1;
    })
  }

}
