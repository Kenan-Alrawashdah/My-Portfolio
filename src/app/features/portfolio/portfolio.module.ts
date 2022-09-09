import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';
import { SkilesComponent } from './skiles/skiles.component';
import { BurgersComponent } from './skiles/burgers/burgers.component';
import { HeaderComponent } from './header/header.component';
import { AngularTypewriterEffectModule } from 'angular-typewriter-effect';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectCardComponent } from './projects/project-card/project-card.component';
import { ExperienceComponent } from './experience/experience.component';


@NgModule({
  declarations: [PortfolioComponent, SkilesComponent, BurgersComponent, HeaderComponent, ProjectsComponent, ProjectCardComponent, ExperienceComponent],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    LayoutModule,
    AngularTypewriterEffectModule
  ]
})
export class PortfolioModule { }
