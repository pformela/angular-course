/* eslint-disable no-console */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { IPost } from './post.model';
import { PostsService } from './posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  public loadedPosts: IPost[] = [];
  public isFetching: boolean = false;
  public firebaseUrl: string =
    'https://angular-course-1f708-default-rtdb.europe-west1.firebasedatabase.app/posts.json';
  public errorSub: Subscription = new Subscription();
  public error: string = '';

  public constructor(private postsService: PostsService) {}

  public ngOnInit(): void {
    this.errorSub = this.postsService.error$.subscribe(
      (errorMessage: string) => {
        this.error = errorMessage;
      }
    );
  }

  public onCreatePost(postData: IPost): void {
    this.postsService.createAndStorePosts(postData.title, postData.content);
  }

  public onFetchPosts(): void {
    this.postsService.fetchPosts().subscribe({
      next: (posts: IPost[]) => {
        this.loadedPosts = posts;
        this.error = '';
      },
      error: (error: string) => {
        this.error = error;
      },
    });
  }

  public onHandleError(): void {
    this.error = '';
  }

  public onClearPosts(): void {
    this.postsService.deletePosts().subscribe(() => {
      this.loadedPosts = [];
    });
  }

  public ngOnDestroy(): void {
    this.errorSub.unsubscribe();
  }
}
