import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-companies',
  templateUrl: './menu-companies.component.html',
  styleUrls: ['./menu-companies.component.css']
})
export class MenuCompaniesComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  changeRoute( routeToGo : string ){
    this.router.navigateByUrl(`home/colors/${routeToGo}`);
  }

}
