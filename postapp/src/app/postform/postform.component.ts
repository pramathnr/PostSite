import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { Post } from '../Post';

@Component({
  selector: 'app-postform',
  templateUrl: './postform.component.html',
  styleUrls: ['./postform.component.css']
})
export class PostformComponent implements OnInit {
  postTitle:string;
  postDescription:string;
  post:Post;
  postSaved:boolean=false;


  constructor(private _postService:PostsService) { }

  ngOnInit() {
  }
  onCreatePost(){
    this.post={ id :null , title: this.postTitle , description: this.postDescription }
    this._postService.savePost(this.post).subscribe(responseData=>{
      if(responseData.posts.ops[0]._id){
        this.postSaved=true;
      }
    })
  }

}
