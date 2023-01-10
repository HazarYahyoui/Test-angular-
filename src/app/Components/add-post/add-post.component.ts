import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from 'src/app/service/post.service';

interface Categorie {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  submitted = false;
  addpostForm?:FormGroup;

  categories: Categorie[] = [
    {value: 'Sport', viewValue: 'Sport'},
    {value: 'Technologies', viewValue: 'Technologies'},
    {value: 'Economie', viewValue: 'Economie'},
    {value: 'Société', viewValue: 'Société'},
    {value: 'Culture', viewValue: 'Culture'}
  ];
  

  constructor(private postservice: PostService, private router:Router){ }
  ngOnInit(): void {
    this.addpostForm = new FormGroup({
      titre: new FormControl('',[Validators.required]),
      description: new FormControl('',[Validators.required]),
      categorie: new FormControl('',[Validators.required]),
      date: new FormControl(new Date().toDateString()),
      id: new FormControl(Math.floor(Math.random()*100))
    })
  }
 
  addPost(){
    this.submitted= true;
    if (this.addpostForm?.invalid){
      return;
    }
    console.log(this.addpostForm?.value);
    this.postservice.addPost(this.addpostForm?.value)
    this.router.navigateByUrl('/list-post');
  }
}
