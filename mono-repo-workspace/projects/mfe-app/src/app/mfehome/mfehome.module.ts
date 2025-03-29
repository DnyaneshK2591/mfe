import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MfehomeComponent } from './mfehome.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path:"", component:MfehomeComponent, pathMatch:"full"
      }
    ])
  ]
})
export class MfehomeModule { }
