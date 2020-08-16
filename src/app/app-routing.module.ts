import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageCatsComponent } from 'src/app/pages';

const routes: Routes = [
  { path: '', redirectTo: 'cats', pathMatch: 'full' },
  { path: 'cats', component: PageCatsComponent },
  { path: '**', redirectTo: 'cats' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
