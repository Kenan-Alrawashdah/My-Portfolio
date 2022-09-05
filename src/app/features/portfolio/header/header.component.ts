import { Component, OnInit } from '@angular/core';
import { MyInfo } from 'src/app/core/interfaces/my_info';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  
  list:Array<string>= ['wep aplicacion', ' Mobile aplicacion'];

  arrInfo: MyInfo[] = [
    {key : 'Years Experience', value : '2'},
    {key : 'Completed Projects', value : '4'},
    // {key : 'Happy Customers', value : '154'},
    // {key : 'Honors and Awards', value : '20'}
  ]
  constructor() { }

  ngOnInit(): void {


  }


}
