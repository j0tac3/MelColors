import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  @Output() textToSearch = new EventEmitter<string>();
  public isSearching = false;
  public buscador! : FormGroup;

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.onInitForm();
  }

  onInitForm(){
    this.buscador = this.fb.group({
      text: new FormControl()
    });
  }

  onTextToSearch(){
    this.isSearching = true;
    let text = this.buscador.get('text')?.value;
    if (text === '') { this.isSearching = false };
    this.textToSearch.emit(text);
  }

  onDeleteText(){
    this.buscador.get('text')?.setValue('');
    this.isSearching = false;
    this.textToSearch.emit('');
  }

}
