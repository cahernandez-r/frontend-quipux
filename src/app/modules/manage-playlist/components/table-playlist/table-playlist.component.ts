import { Component } from '@angular/core';
import { Playlist, ResponseFetchAllPlayList } from '../../models/playlist';
import { ManagePlaylistService } from '../../services/manage-playlist.service';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';
import { UtilService } from 'src/app/shared/services/util.service';

@Component({
  selector: 'app-table-playlist',
  templateUrl: './table-playlist.component.html',
  styleUrls: ['./table-playlist.component.scss']
})
export class TablePlaylistComponent {

  playlists: Playlist[] = []
  showModalDetail: boolean = false;
  totalElement: number = 0;

  constructor(
    private readonly managePlaylistService:ManagePlaylistService,
    private router: Router,
    private confirmationService: ConfirmationService,
    private translate: TranslateService,
    private utilService: UtilService,
  ) {}

  eventFetchKnowledgeBases($event: any):void {
    const page:number = $event?.first / $event.rows;
    const size: number = $event.rows;
    this.fetchAllPlaylist(page, size);
  }

  fetchAllPlaylist(page:number, size:number):void {
    this.managePlaylistService.fetchAllPlayList(page, size).subscribe({
      next: (response: ResponseFetchAllPlayList) => {
        this.playlists = response.playlists;
        this.totalElement = response.totalElement;
      },
      error: (e) => {
        console.log(e)
        this.utilService.showMessage("messages.error-unexpected", "error");
      }
    });
  }

  onViewDetailPlaylist(playListName: string):void {
    this.router.navigate(["list", "detail", playListName]);
  }

  onDeletePlaylist(playlistName: string):void {
    this.confirmationService.confirm({
      message: this.translate.instant('messages.confirmation.CONFIR001'),
      accept: () => {
          this.callDeletePlaylist(playlistName);
      },
    });
  }

  callDeletePlaylist(playlistName: string):void {
    this.managePlaylistService.deletePlaylist(playlistName).subscribe({
      next: () => {
        this.fetchAllPlaylist(0, 5);
        this.utilService.showMessage("messages.playlist-deleted", "success");
      },
      error: (e) => {
        this.utilService.showMessage("messages.error-unexpected", "error");
      }
    });
  }

  onCreatePlaylist():void {
    this.router.navigate(["list","create"]);
  }
}
