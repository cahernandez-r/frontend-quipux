import { Component } from '@angular/core';
import { Playlist, ResponseFetchAllPlayList } from '../../models/playlist';
import { ManagePlaylistService } from '../../services/manage-playlist.service';

@Component({
  selector: 'app-table-playlist',
  templateUrl: './table-playlist.component.html',
  styleUrls: ['./table-playlist.component.scss']
})
export class TablePlaylistComponent {

  playlists: Playlist[] = []

  constructor(private readonly managePlaylistService:ManagePlaylistService) {
    
  }

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
}
