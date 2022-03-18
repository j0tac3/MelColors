import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnInit {
  public marcas = [
    {'id':1,'desc':'Vallejo'},
    {'id':2,'desc':'Citadel'},
    {'id':3,'desc':'Army Painter'}
  ];
  public categorias = [
    {'id':0,'desc':'Todos'},
    {'id':1,'desc':'Model Color'},
    {'id':2,'desc':'Model Air'},
    {'id':3,'desc':'Game Color'},
    {'id':4,'desc':'Game Air'}
  ];
  public currentMarca! : number;
  public currentCategoria! : number;
  public filtro! : FormGroup;
  public expanded = false;

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.fofmInit();
    this.currentMarca = this.marcas[0].id;
    this.currentCategoria = this.categorias[0].id;
  }

  fofmInit(){    
    this.filtro = this.fb.group({
      marca : new FormControl( this.marcas[0].id, Validators.required),
      categoria : new FormControl(this.categorias[0].id, Validators.required)
    });

  }

  onChangeMarca(marca : number){
    this.currentMarca = marca;
  }

  onChangeCategoria(categoria : number){
    this.currentCategoria = categoria;
  }

  clearFilter(){
    this.filtro.get('marca')?.reset(this.marcas[0].id);
    this.filtro.get('categoria')?.reset(this.categorias[0].id);
  }

  onExpand(expand : boolean){
    this.expanded = expand;
  }

}
