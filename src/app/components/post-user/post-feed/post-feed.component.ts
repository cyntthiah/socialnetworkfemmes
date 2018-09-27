import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-feed',
  templateUrl: './post-feed.component.html',
  styleUrls: ['./post-feed.component.css']
})
export class PostFeedComponent implements OnInit {
  posts$: Observable<any>;
  constructor(private database: AngularFireDatabase) {
    this.posts$ = this.database.list('/posts').valueChanges();
   }

  ngOnInit() {
  }
}
