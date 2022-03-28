import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.css']
})
export class MenuAdminComponent implements OnInit {

  constructor( private router : Router) { }

  ngOnInit(): void {
  }

  changeRoute( routeToGo : string ){
    this.router.navigateByUrl(`administrar/${routeToGo}`);
  }

}
