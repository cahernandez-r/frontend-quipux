import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-page-manage-playlist',
  templateUrl: './page-manage-playlist.component.html',
  styleUrls: ['./page-manage-playlist.component.scss']
})
export class PageManagePlaylistComponent {

  constructor(private readonly authService: AuthService, private readonly router: Router) {

  }

  onLogout():void {
    this.authService.logout();
    this.router.navigate(["auth", "login"])
  }
}
