import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  @Output() textToSearch = new EventEmitter<string>();
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
    let text = this.buscador.get('text')?.value;
    this.textToSearch.emit(text);
  }

}
