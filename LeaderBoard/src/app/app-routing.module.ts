import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { HonorComponent } from './honor/honor.component';
import { OverallRankComponent } from './overall-rank/overall-rank.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';

const routes: Routes = [
  // {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path:'', component: LeaderboardComponent,
    children: [
      
      {path:'honor', component: HonorComponent},
      {path:'rank', component: OverallRankComponent},
      {path:'user', component: AddUserComponent},
    ]
  },
  {path: '**', redirectTo: '', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
