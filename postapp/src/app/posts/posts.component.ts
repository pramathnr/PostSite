import { Component, OnInit } from '@angular/core';
import {Post} from '../Post';
import { PostsService } from '../posts.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  post: Post;


  constructor(private _postService:PostsService) { }

  ngOnInit() {
    this._postService.getPost().pipe(map(responseData=>{
      return responseData.posts.map(post=>{
        return{
          id:post._id,
          title:post.title,
          description:post.description
        }
      })
    })).subscribe(changedData=>{
      this.posts=changedData;
    });
  }


}
