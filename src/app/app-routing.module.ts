import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LikeComponent } from './pages/like/like.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'like', component: LikeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
