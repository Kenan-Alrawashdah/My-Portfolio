import { Component, OnInit } from '@angular/core';
import { MyInfo } from 'src/app/core/interfaces/my_info';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  
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
