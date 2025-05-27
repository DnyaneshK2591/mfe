import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  // {
  //   path: "",
  //   component: HomeComponent,
  //   pathMatch: 'full'
  // },
  {
    path: '',
    loadChildren: () =>
      import('mfe-app/MfehomeModule').then((m) => m.MfehomeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
