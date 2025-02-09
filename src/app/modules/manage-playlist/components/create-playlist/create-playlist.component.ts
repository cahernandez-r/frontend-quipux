import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SongService } from 'src/app/shared/services/song.service';
import { ResponseFetchAllSongs, Song } from 'src/app/shared/models/song';
import { ManagePlaylistService } from '../../services/manage-playlist.service';
import { RequestCreatePlaylist, ResponseFetchDetail, ResponseValidateExistPlayListName } from '../../models/playlist';
import { UtilService } from 'src/app/shared/services/util.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-playlist',
  templateUrl: './create-playlist.component.html',
  styleUrls: ['./create-playlist.component.scss']
})
export class CreatePlaylistComponent implements OnInit {

  formPlaylist: FormGroup;
  songs: Song [] = [];
  selectedSongs: Song [] = []

  constructor(
    private readonly fb: FormBuilder, 
    private readonly songService: SongService,
    private readonly managePlaylistService: ManagePlaylistService,
    private readonly utilService: UtilService,
    private readonly router: Router) {

    this.formPlaylist = this.fb.group({
      name: ["", Validators.required],
      description: ["", Validators.required],
    });
  }

  ngOnInit(): void {
    this.fetchSongs();
  }

  onChangeName():void {
    const listName: string = this.controlName.value;
    if (listName.length === 0)return;
    
    this.managePlaylistService.validatePlaylistName(listName).subscribe({
      next:(response: ResponseValidateExistPlayListName) => {
        if (response.existsPlayList) {
          this.utilService.showMessage("messages.error.ERR001", "error");
          this.controlName.setValue("");
        }
      }
    })
  }

  fetchSongs():void {
    this.songService.fetchAllSong().subscribe({
      next: (response: ResponseFetchAllSongs) => {
        this.songs = response.songs;
      }
    });
  }

  onCreatePlaylist():void {
    const request: RequestCreatePlaylist = {
      ...this.formPlaylist.value,
      idSongs: this.selectedSongs.map(song => song.id)
    }
    this.managePlaylistService.createPlaylist(request).subscribe({
      next: (response: ResponseFetchDetail) => {
        if(response) {
          this.utilService.showMessage("messages.playlist-created", "success");
          this.onBack();
        }
      }, 
      error: (e) => {
        this.utilService.showMessage("messages.error-unexpected", "error");
      }
    });
  }

  onBack():void {
    this.router.navigate(["list"]);
  }

  get controlName():FormControl {
    return this.formPlaylist.get("name") as FormControl;
  }

  get descriptionControl():FormControl {
    return this.formPlaylist.get("description") as FormControl;
  }
}
