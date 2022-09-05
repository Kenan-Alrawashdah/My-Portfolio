import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Language } from 'src/app/core/interfaces/language';
import { MyInfo } from 'src/app/core/interfaces/my_info';
import { Skile } from 'src/app/core/interfaces/skile';
@Component({
  selector: 'app-skiles',
  templateUrl: './skiles.component.html',
  styleUrls: ['./skiles.component.scss']
})
export class SkilesComponent implements OnInit {

  myInfo :  MyInfo[] =[
    {key:'Country', value:'Jorden'},
    {key:'City', value:'Amman'},
    {key:'Age', value:'24'},
   ];

   languages : Language[] =[
    {name:'Arabic', ratio : 100},
    {name:'English', ratio : 60},
   ];

   skiles : Skile[]=[
     {id:1, name:'ASP.NetCor', ratio:85},
     {id:2, name:'MVC', ratio:95},
     {id:3, name:'Restfull API', ratio:85},
     {id:4, name:'Entityfremwork', ratio:90},
     {id:5, name:'LinQ', ratio:90},
     {id:6, name:'Angular', ratio:75},
     {id:7, name:'TypeScript', ratio:80},
     {id:8, name:'JavaScript', ratio:80},
     {id:9, name:'HTML', ratio:95},
     {id:10, name:'CSS', ratio:90},
     {id:11, name:'Jquery', ratio:70},
     {id:12, name:'Bootstrab', ratio:85},
     {id:13, name:'SQL Server', ratio:85},

   ];
   showSide: boolean = true;
   showIcon = false;
   showAn = false;
  constructor(private breakpointObserver :BreakpointObserver) { }

  ngOnInit(): void {

    // this.breakpointObserver.observe(['(max-width: 900px)']).subscribe((status :BreakpointState)=>{
    //      if(status.matches){
    //        this.showIcon = true;
    //        this.showSide = false;
    //        if(!this.showSide){
    //         this.showAn = false;
    //        }
    //      }else{
    //        this.showIcon = false;
    //        this.showSide = true;
          
    //      }
    // })
  }
  
  showSideF(value: boolean){
      console.log(value)
       this.showSide = value;
  }
}
