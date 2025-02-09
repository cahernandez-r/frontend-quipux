import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseFetchAllPlayList } from '../models/playlist';
import { backendUrl } from 'src/app/core/constants/api-url';

@Injectable({
  providedIn: 'root'
})
export class ManagePlaylistService {

  PATH_ROOT = "lists";

  constructor(private readonly http: HttpClient) { 
    
  }

  fetchAllPlayList():Observable<ResponseFetchAllPlayList> {
    return this.http.get<ResponseFetchAllPlayList>(backendUrl(this.PATH_ROOT));
  }
}
