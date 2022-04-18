import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mini-menu-companies',
  templateUrl: './mini-menu-companies.component.html',
  styleUrls: ['./mini-menu-companies.component.css']
})
export class MiniMenuCompaniesComponent implements OnInit {
  @Input() company! : string;
  @Output() onGoToPage = new EventEmitter<string>();

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  gotToPage(routeToGo : string){
    this.onGoToPage.emit(routeToGo);
  }
}
