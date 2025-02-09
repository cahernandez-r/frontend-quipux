import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ManagePlaylistService } from '../../services/manage-playlist.service';
import { ResponseFetchDetail } from '../../models/playlist';

@Component({
  selector: 'app-detail-playlist',
  templateUrl: './detail-playlist.component.html',
  styleUrls: ['./detail-playlist.component.scss']
})
export class DetailPlaylistComponent implements OnInit {

  detailPlaylist!: ResponseFetchDetail;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly managePlaylistService: ManagePlaylistService,
    private readonly router: Router)
  {}
  
  ngOnInit(): void {
    this.callFetchDetailPlaylist();  
  }

  callFetchDetailPlaylist() {
    const playlistName = this.route.snapshot.paramMap.get('playlistName');
    this.fetchDetailPlaylist(playlistName);
  }
  
  fetchDetailPlaylist(playlistName: string | null):void {
    if (!playlistName) return;
    this.managePlaylistService.fetchDetailPlayList(playlistName).subscribe({
      next: (response: ResponseFetchDetail) => {
        this.detailPlaylist = response;
      }
    });
  }

  onBack():void {
    this.router.navigate(["list"])
  }

}
