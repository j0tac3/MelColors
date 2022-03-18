import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnInit {
  public marca : number = 1;
  public categoria : number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  onChangeMarca(marca : number){
    this.marca = marca;
  }

}
