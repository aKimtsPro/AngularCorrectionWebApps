import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from 'src/app/model/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  readonly BASE_URL = "http://jsonplaceholder.typicode.com/";


  constructor(private httpClient: HttpClient) {
  }

  getPosts(): Observable<Post[]> {
    return this.httpClient.get(this.BASE_URL+'posts') as Observable<Post[]>;
  }

  postPost( toSend: Post ){
    this.httpClient.post(this.BASE_URL+'posts', toSend).subscribe((element => console.log(element)));
  }


}
