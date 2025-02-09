import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import ('./modules/manage-playlist/manage-playlist.module').then((m) => m.ManagePlaylistModule),
    canActivate: [authGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import ('./modules/auth/auth.module').then((m) => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
