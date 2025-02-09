import { Component } from '@angular/core';
import { Playlist, ResponseFetchAllPlayList } from '../../models/playlist';
import { ManagePlaylistService } from '../../services/manage-playlist.service';
import { Router } from '@angular/router';

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
    private router: Router
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
}
