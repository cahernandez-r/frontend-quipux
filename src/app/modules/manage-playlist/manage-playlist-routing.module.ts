import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageManagePlaylistComponent } from './pages/page-manage-playlist/page-manage-playlist.component';
import { TablePlaylistComponent } from './components/table-playlist/table-playlist.component';
import { DetailPlaylistComponent } from './components/detail-playlist/detail-playlist.component';
import { CreatePlaylistComponent } from './components/create-playlist/create-playlist.component';

const routes: Routes = [
  {
    path: '',
    component: PageManagePlaylistComponent,
    children: [
      {
        path: '', 
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: TablePlaylistComponent
      },
      {
        path: 'list/detail/:playlistName',
        component: DetailPlaylistComponent
      },
      {
        path: 'list/create',
        component: CreatePlaylistComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagePlaylistRoutingModule { }
