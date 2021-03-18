import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/post.model';
import { PostService } from 'src/app/services/post.service';


@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  constructor(private service: PostService) { }

  posts: Post[] = [];

  post: Post = {
    userId: 0,
    id: 0,
    title: '',
    body: ''
  } 

  ngOnInit(): void {
  }

  onClick(){
    let obs = this.service.getPosts();
    obs.subscribe( posts =>  this.posts = posts);
  }

  send(){
    this.service.postPost( this.post );
  }

}
