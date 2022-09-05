import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-burgers',
  templateUrl: './burgers.component.html',
  styleUrls: ['./burgers.component.scss']
})
export class BurgersComponent implements OnInit {
  
  @Output() showSideEvent = new EventEmitter<boolean>();
  
  isShowSide = false;
  showIcon = true;
  showAn = false;

  constructor(private breakpointObserver :BreakpointObserver) { }

  ngOnInit(): void {
     this.breakpointObserver.observe(['(max-width: 900px)']).subscribe((status :BreakpointState)=>{
         if(status.matches){
           this.showIcon = true;
           this.isShowSide = false;
           this.showSideEvent.emit(this.isShowSide);

           if(!this.isShowSide){
            this.showAn = false;
           }

         }else{
           this.showIcon = false;
           this.isShowSide = true;
           this.showSideEvent.emit(this.isShowSide);          
         }
    })
  }
  
  show(){
    this.isShowSide = !this.isShowSide;
    this.showSideEvent.emit(this.isShowSide)
    this.showAn = !this.showAn;
 }

}
