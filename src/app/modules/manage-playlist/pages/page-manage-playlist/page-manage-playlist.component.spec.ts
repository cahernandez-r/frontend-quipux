import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageManagePlaylistComponent } from './page-manage-playlist.component';

describe('PageManagePlaylistComponent', () => {
  let component: PageManagePlaylistComponent;
  let fixture: ComponentFixture<PageManagePlaylistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageManagePlaylistComponent]
    });
    fixture = TestBed.createComponent(PageManagePlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
