import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagePlaylistRoutingModule } from './manage-playlist-routing.module';
import { PageManagePlaylistComponent } from './pages/page-manage-playlist/page-manage-playlist.component';
import { TablePlaylistComponent } from './components/table-playlist/table-playlist.component';
import { PrimeNgModule } from 'src/app/shared/modules/primeng/primeng.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    PageManagePlaylistComponent,
    TablePlaylistComponent
  ],
  imports: [
    CommonModule,
    ManagePlaylistRoutingModule,
    PrimeNgModule,
    TranslateModule,
  ]
})
export class ManagePlaylistModule { }
