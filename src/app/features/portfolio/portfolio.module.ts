import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';
import { SkilesComponent } from './skiles/skiles.component';
import { BurgersComponent } from './skiles/burgers/burgers.component';


@NgModule({
  declarations: [PortfolioComponent, SkilesComponent, BurgersComponent],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    LayoutModule
  ]
})
export class PortfolioModule { }
