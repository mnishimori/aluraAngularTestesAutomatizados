import {PhotoBoardService} from './photo-board.service';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Photo} from '../intefaces/photo';
import {buildPhotoList} from '../test/build-photos';

@Injectable()
export class PhotoBoardMockService extends PhotoBoardService {

  public getPhotos(): Observable<Photo[]> {
    return of(buildPhotoList());
  }
}
