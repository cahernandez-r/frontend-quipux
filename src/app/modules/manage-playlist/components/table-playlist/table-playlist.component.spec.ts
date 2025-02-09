import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePlaylistComponent } from './table-playlist.component';

describe('TablePlaylistComponent', () => {
  let component: TablePlaylistComponent;
  let fixture: ComponentFixture<TablePlaylistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablePlaylistComponent]
    });
    fixture = TestBed.createComponent(TablePlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
