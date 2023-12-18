/* eslint-disable no-console */
import {
  HttpClient,
  HttpEvent,
  HttpEventType,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPost } from './post.model';
import { Observable, Subject, map, catchError, throwError, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PostsService {
  public firebaseUrl: string =
    'https://angular-course-1f708-default-rtdb.europe-west1.firebasedatabase.app/posts.json';
  private error: Subject<string> = new Subject<string>();

  public constructor(private http: HttpClient) {}

  public get error$(): Observable<string> {
    return this.error.asObservable();
  }

  public createAndStorePosts(title: string, content: string): void {
    const postData: IPost = { title, content };

    this.http
      .post(this.firebaseUrl, postData, {
        observe: 'response', // 'body' | 'events' | 'response' - returns the full response/body/events
      })
      .subscribe({
        next: (responseData: object) => {
          console.log(responseData);
        },
        error: (error: Error) => {
          this.error.next(error.message);
        },
      });
  }

  public fetchPosts(): Observable<IPost[]> {
    return this.http
      .get<{ [key: string]: IPost }>(this.firebaseUrl, {
        headers: new HttpHeaders({ 'Custom-Header': 'Hello' }),
        params: new HttpParams().set('print', 'pretty'),
        responseType: 'json', // 'json' | 'text' - returns the full response/body
      })
      .pipe(
        map((responseData: { [key: string]: IPost }) => {
          return Object.keys(responseData).reduce(
            (prev: IPost[], next: string) => {
              return [...prev, responseData[next]];
            },
            []
          );
        }),
        catchError((error: Error) => {
          // send to analytics server
          return throwError(error);
        })
      );
  }

  public deletePosts(): Observable<HttpEvent<void>> {
    return this.http
      .delete<void>(this.firebaseUrl, {
        observe: 'events',
      })
      .pipe(
        tap((event: HttpEvent<void>) => {
          console.log('Deleted!');
          if (event.type === HttpEventType.Sent) {
            console.log(event.type);
          }
          if (event.type === HttpEventType.Response) {
            console.log(event.type);
          }
        })
      );
  }
}
