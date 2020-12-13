import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Post } from './Post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private _baseUrl="http://localhost:8080/api/"
  constructor(private _http:HttpClient) { }
  getPost(){
    return this._http.get<{message:string,posts:any}>(this._baseUrl+"posts")
  }
  savePost(post:Post){
   // const httpHeaders= new HttpHeaders({
     // 'Content-Type':'application/json',
      //'Authorization':'Bearer'+ localStorage.getItem('token')
    //});
    //const httpOptions={
      //headers: httpHeaders
    //};
    return this._http.post<{message:string,posts:any}>(this._baseUrl+"/save",post)
  }
}
