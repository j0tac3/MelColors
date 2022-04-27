import { Component, OnInit } from '@angular/core';
import { ColorObject } from 'src/app/models/colorobject.model';
import { ColorService } from 'src/app/service/color.service';

@Component({
  selector: 'app-list-of-colors',
  templateUrl: './list-of-colors.component.html',
  styleUrls: ['./list-of-colors.component.css']
})
export class ListOfColorsComponent implements OnInit {
  public colors! : ColorObject[];

  constructor(private colorService : ColorService) { }

  ngOnInit(): void {
    this.onGetColors();
  }

  onGetColors(){
    this.colorService.getColor()
    .subscribe(resp => {
      this.colors = resp.data;
       console.log(this.colors)
    });
  }

}
