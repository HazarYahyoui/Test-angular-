import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  addPost(data: any){
    let posts = JSON.parse(localStorage.getItem('posts') || '[]');
    posts.push(data);
    localStorage.setItem('posts',JSON.stringify(posts));
    
   }

   getAllPost(){
    return JSON.parse(localStorage.getItem('posts') || '[]');
   }

   deletepostByIndex(index:number){
    let posts= JSON.parse(localStorage.getItem("posts") || '[]');
    posts.splice(index,1);
    localStorage.setItem("posts",JSON.stringify(posts));
   }

   getpostById(id:number){
    let Posts = JSON.parse(localStorage.getItem("posts") || '[]');
    let post = Posts.find((x:any)=>x.id == id);
    return post;
   }

   updatepostDataById(updatpostData:any,id:number){
    let Posts =  JSON.parse(localStorage.getItem("posts") || '[]');
    let index=Posts.findIndex((x:any) => x.id === id);
    Posts.splice(index,1,updatpostData);
    localStorage.setItem("posts",JSON.stringify(Posts));
     
   }

}
