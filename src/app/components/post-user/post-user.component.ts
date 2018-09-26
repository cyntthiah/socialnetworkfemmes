import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-user',
  templateUrl: './post-user.component.html',
  styleUrls: ['./post-user.component.css']
})
export class PostUserComponent implements OnInit {
  @Input() commentary: string;
  constructor() { }

  ngOnInit() {
  }

}
