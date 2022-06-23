import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoListComponent } from './photo-list.component';
import {PhotoListModule} from './photo-list.module';
import {HttpClientModule} from '@angular/common/http';
import {buildPhotoList} from '../../shared/components/photo-board/test/build-photos';
import {PhotoBoardService} from '../../shared/components/photo-board/services/photo-board.service';
import {Observable, of} from 'rxjs';
import {Photo} from '../../shared/components/photo-board/intefaces/photo';
import {PhotoBoardMockService} from '../../shared/components/photo-board/services/photo-board-mock.service';

describe(PhotoListComponent.name + ' Mock provider ', () => {
  let component: PhotoListComponent;
  let fixture: ComponentFixture<PhotoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoListComponent ],
      imports: [ PhotoListModule, HttpClientModule ],
      providers: [{
        provide: PhotoBoardService,
        useClass: PhotoBoardMockService
      }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoListComponent);
    component = fixture.componentInstance;
  });

  it(`(D) Should display board when data arrives`, () => {
    fixture.detectChanges();
    const board = fixture.nativeElement.querySelector('app-photo-board');
    const loader = fixture.nativeElement.querySelector('.loader');
    expect(board).not.toBeNull();
    expect(loader).toBeNull();
  });
});
