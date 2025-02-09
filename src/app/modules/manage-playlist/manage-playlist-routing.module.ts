import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageManagePlaylistComponent } from './pages/page-manage-playlist/page-manage-playlist.component';
import { TablePlaylistComponent } from './components/table-playlist/table-playlist.component';

const routes: Routes = [
  {
    path: '',
    component: PageManagePlaylistComponent,
    children: [
      {
        path: '',
        component: TablePlaylistComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagePlaylistRoutingModule { }
