import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureComponentComponent } from './feature-component/feature-component.component';
import { FeatureRoutingModule } from './feature-routing.module';




@NgModule({
  declarations: [
    FeatureComponentComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule ]
})
export class FeatureModule { }
