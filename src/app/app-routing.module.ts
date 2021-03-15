import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './components/users/add/add.component';
import { ListComponent } from './components/users/list/list.component';
import { UpdateComponent } from './components/users/update/update.component';


const routes: Routes = [
  { path: 'users', component: ListComponent },
  { path: 'users/add', component: AddComponent},
  { path: 'users/update/:id', component:UpdateComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
