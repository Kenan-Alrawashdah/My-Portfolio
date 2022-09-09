import { Component, OnInit } from '@angular/core';
import { MyInfo } from 'src/app/core/interfaces/my_info';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  
  list:Array<string>= ['wep aplicacion', ' Mobile aplicacion'];

 
  constructor() { }

  ngOnInit(): void {


  }


}
