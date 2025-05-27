import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MfehomeComponent } from './mfehome/mfehome.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'mfehome',
    pathMatch: 'full',
  },
  {
    path: 'mfehome',
    component: MfehomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
