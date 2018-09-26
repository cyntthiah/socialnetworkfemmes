import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {
  postForm: FormGroup;
  postList$: AngularFireList<any>;

  constructor(private formBuilder: FormBuilder, private database: AngularFireDatabase) {
    this.createpostForm();
    this.postList$ = this.database.list('/posts');
  }

  ngOnInit() {
  }
  createpostForm() {
    this.postForm = this.formBuilder.group({
      commentary: ['', Validators.required]
    });
  }

  addPost() {
    const newPost = {
      commentary: this.postForm.value.commentary
    };

    this.postList$.push(newPost);
    this.postForm.reset();
  }

}
