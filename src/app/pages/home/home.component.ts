import { Observable } from 'rxjs';
import { iPost } from './../../interfaces/main-interface-server';
import { ServerService } from './../../services/server.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(private apiService: ServerService) {}

  sottoscrizione: any;

  allPosts: iPost[] = [];
  likeArr: iPost[] = [];

  ngOnInit() {
    this.sottoscrizione = this.apiService.getAllPosts().subscribe((res) => {
      this.allPosts = res;
    });

    this.apiService.like$.subscribe((likeP) => {
      this.likeArr = likeP;
    });
  }

  addToLike(post: iPost) {
    if (this.likeArr.includes(post)) {
      console.log('gia presente');
    } else {
      this.likeArr.push(post);
    }
  }

  removeFromLike(currentPost: iPost) {
    this.likeArr = this.likeArr.filter((post) => post.id !== currentPost.id);
  }

  ngOnDestroy(): void {
    this.apiService
      .getAllPosts()
      .subscribe((res) => {
        this.allPosts = res;
      })
      .unsubscribe();
  }
}
