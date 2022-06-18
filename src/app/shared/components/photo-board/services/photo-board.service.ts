import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Photo} from '../intefaces/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoBoardService {

  constructor(private http: HttpClient) {
    console.log('Http ' + this.http);
  }

  public getPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>('http://localhost:3000/photos');
  }
}
