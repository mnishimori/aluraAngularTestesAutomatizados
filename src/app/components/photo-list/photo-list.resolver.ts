import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Photo} from '../../shared/components/photo-board/intefaces/photo';
import {PhotoBoardService} from '../../shared/components/photo-board/services/photo-board.service';

@Injectable({
  providedIn: 'root'
})
export class PhotoListResolver implements Resolve<Observable<Photo>[]> {

  constructor(private service: PhotoBoardService) {
  }

  // @ts-ignore
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Photo[]> {
    console.log('resolver ');
    return this.service.getPhotos();
  }
}
