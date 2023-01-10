import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {
  [x: string]: any;
 
  posts:any;
  

  constructor(private postservice:PostService, private router: Router ){ }
  ngOnInit(): void {
    this.posts=this.postservice.getAllPost()
  }

  deletePost(i:any){
    this.postservice.deletepostByIndex(i)
    this.ngOnInit
    location.reload();
  }
}
