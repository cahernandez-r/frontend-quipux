import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagePlaylistRoutingModule } from './manage-playlist-routing.module';
import { PageManagePlaylistComponent } from './pages/page-manage-playlist/page-manage-playlist.component';
import { TablePlaylistComponent } from './components/table-playlist/table-playlist.component';
import { PrimeNgModule } from 'src/app/shared/modules/primeng/primeng.module';
import { TranslateModule } from '@ngx-translate/core';
import { DialogService } from 'primeng/dynamicdialog';
import { DetailPlaylistComponent } from './components/detail-playlist/detail-playlist.component';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    PageManagePlaylistComponent,
    TablePlaylistComponent,
    DetailPlaylistComponent
  ],
  imports: [
    CommonModule,
    ManagePlaylistRoutingModule,
    PrimeNgModule,
    TranslateModule,
  ],
  providers: [
    DialogService,
    MessageService,
  ]
})
export class ManagePlaylistModule { }
