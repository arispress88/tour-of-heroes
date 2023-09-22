import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component'; // <-- import HeroesComponent
import { DashboardComponent } from './dashboard/dashboard.component'; // <-- import DashboardComponent
import { HeroDetailComponent } from './hero-detail/hero-detail.component'; // <-- import HeroDetailComponent

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent }, // <-- add route to HeroesComponent
  { path: 'dashboard', component: DashboardComponent }, // <-- add route to DashboardComponent
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // <-- redirect to DashboardComponent
  { path: 'detail/:id', component: HeroDetailComponent }, // <-- add route to HeroDetailComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
