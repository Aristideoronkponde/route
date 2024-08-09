import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatisticsComponent } from './dashboard/statistics/statistics.component';
import { ReportsComponent } from './dashboard/reports/reports.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },// fait une redicrection si il y a rien au niveau du patch
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'user/:id', component: UserComponent },

    {
      path: 'dashboard',
      component: DashboardComponent,
      children: [
        { path: 'statistics', component: StatisticsComponent },
        { path: 'reports', component: ReportsComponent }
      ]
    },
    { path: '**', component: PageNotFoundComponent},
   

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
