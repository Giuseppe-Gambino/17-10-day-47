import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, interval, Observable } from 'rxjs';
import { map } from 'rxjs';
import { iPost } from '../interfaces/main-interface-server';

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  private apiUrl: string = 'https://jsonplaceholder.typicode.com/photos';

  private postArr = new BehaviorSubject<iPost[]>([]);
  post$ = this.postArr.asObservable();

  private likeArr = new BehaviorSubject<iPost[]>([]);
  like$ = this.likeArr.asObservable();

  private dataLoaded: boolean = false;

  constructor(private http: HttpClient) {}

  getAllPosts(): Observable<iPost[]> {
    // setInterval(() => {
    //   console.log('attivo');
    // }, 1000);
    return this.http
      .get<iPost[]>(this.apiUrl)
      .pipe(map((posts) => (posts = posts.slice(0, 6))));
  }
}
