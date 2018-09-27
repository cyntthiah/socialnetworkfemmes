import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { PostFeedComponent } from '../post-user/post-feed/post-feed.component';


@Component({
  selector: 'app-icon-post',
  templateUrl: './icon-post.component.html',
  styleUrls: ['./icon-post.component.css']
})
export class IconPostComponent implements OnInit {
  @Input() idPost;
  constructor(private database: AngularFireDatabase) { }

  ngOnInit() {}

  deletePost(keyPost) {
    this.database.object(`post/${keyPost}`).remove();
  }


}
