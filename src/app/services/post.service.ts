import { Injectable } from '@angular/core';
import { AngularFireDatabaseModule, AngularFireList } from '@angular/fire/database';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  postList: AngularFireList<any>;
  selectPost: Post = new Post();
  constructor(private firebase: AngularFireDatabaseModule) { }

  // getPost() {
  //  return this.postList = this.firebase.list('posts');
  // }
  insertPost(post: Post) {
    this.postList.push({
      post: post.post
    });
  }
  updatePost(post: Post) {
    this.postList.update(post.$Key, {
      post: post.post
    });
  }
  deletePost($Key: string) {
    this.postList.remove($Key);
  }
}
