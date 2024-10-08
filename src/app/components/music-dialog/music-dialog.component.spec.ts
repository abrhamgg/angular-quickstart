import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicDialogComponent } from './music-dialog.component';

describe('MusicDialogComponent', () => {
  let component: MusicDialogComponent;
  let fixture: ComponentFixture<MusicDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MusicDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
