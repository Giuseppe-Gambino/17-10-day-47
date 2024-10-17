import { Component } from '@angular/core';
import { ServerService } from '../../services/server.service';
import { iPost } from '../../interfaces/main-interface-server';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrl: './like.component.scss',
})
export class LikeComponent {
  constructor(private apiService: ServerService) {}

  allPosts: iPost[] = [];
  likeArr: iPost[] = [];

  ngOnInit() {
    this.apiService.like$.subscribe((data) => {
      this.likeArr = data;
    });
  }
}
