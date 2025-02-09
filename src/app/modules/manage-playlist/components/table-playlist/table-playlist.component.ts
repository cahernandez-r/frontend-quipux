import { Component } from '@angular/core';
import { Playlist, ResponseFetchAllPlayList } from '../../models/playlist';
import { ManagePlaylistService } from '../../services/manage-playlist.service';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-table-playlist',
  templateUrl: './table-playlist.component.html',
  styleUrls: ['./table-playlist.component.scss']
})
export class TablePlaylistComponent {

  playlists: Playlist[] = []
  showModalDetail: boolean = false;

  constructor(
    private readonly managePlaylistService:ManagePlaylistService,
    private router: Router,
    private confirmationService: ConfirmationService,
    private translate: TranslateService,
  ) {}

  fetchAllPlaylist():void {
    this.managePlaylistService.fetchAllPlayList().subscribe({
      next: (response: ResponseFetchAllPlayList) => {
        console.log(response.playlists)
        this.playlists = response.playlists;
      },
      error: (e) => {
        //TODO: CREATE AN INTERCEPTOR
      }
    });
  }

  onViewDetailPlaylist(playListName: string):void {
    this.router.navigate(["list", "detail", playListName]);
  }

  onDeletePlaylist(playlistName: string):void {
    this.confirmationService.confirm({
      message: `${this.translate.instant('messages.confirmation.CONFIR001')}: ${playlistName}`,
      accept: () => {
          this.callDeletePlaylist(playlistName);
      },
    });
  }

  callDeletePlaylist(playlistName: string):void {
    this.managePlaylistService.deletePlaylist(playlistName).subscribe({
      next: () => {
        console.log("eliminada_exito");
        this.fetchAllPlaylist();
      }
    });
  }

  onCreatePlaylist():void {
    this.router.navigate(["list","create"]);
  }
}
