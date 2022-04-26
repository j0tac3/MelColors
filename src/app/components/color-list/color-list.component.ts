import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Color } from 'src/app/models/color.model';
import { ColorObject } from 'src/app/models/colorobject.model';
import { ColorService } from 'src/app/service/color.service';

@Component({
  selector: 'app-color-list',
  templateUrl: './color-list.component.html',
  styleUrls: ['./color-list.component.css']
})
export class ColorListComponent implements OnInit {
  @Input() colors! : ColorObject[];
  public colorToSee! : ColorObject[];
  public company! : string;

  constructor( private colorService : ColorService,
                private actRoute : ActivatedRoute,
                private router : Router) { }

  ngOnInit(): void {
    this.getCompany();
    this.getColors();
  }

  getCompany(){
    this.company = this.actRoute.snapshot.params['company'];
  }

  getColors(){
    this.colorService.getcolorscompany(this.company)
    //this.colorService.getColor()
    .subscribe( resp => {
      this.colors = resp.data;
      this.colorToSee = resp.data;
    });
  }

  onTextToSearch(text : any){
    if (text !== '' && text !== '*'){
      this.colorToSee = this.filterItems(text);
    } else if(text === '*'){
      this.colorToSee = this.colors;
    } else {
      this.colorToSee = this.colors;
    }
  }
  
  filterItems(query : string) {
    return this.colors.filter(function(color) {
        return (color.code!.toLowerCase().indexOf(query.toLowerCase()) > -1) || 
                (color.desc_en!.toLowerCase().indexOf(query.toLowerCase()) > -1) ||
                (color.desc_es!.toLowerCase().indexOf(query.toLowerCase()) > -1);
    })
  }

  filterItemsByFilter( filter : any ){
    //this.colorToSee = this.colors.filter(function(color) {
    this.colorToSee = this.colors.filter(function(color) {
      //return (color.company_id! == filter.company_id) && (color.category_id! == filter.category_id);
    })
  }

  onGoToPage(routeToGo : any){
    this.router.navigateByUrl(`home/colors/${routeToGo}`);
    this.company = routeToGo;
    this.getColors();
  }

}
