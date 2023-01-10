import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/service/post.service';


interface Categorie {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit{
  
  submitted= false;
  updatepostForm: FormGroup= new FormGroup({
    titre: new FormControl('',[Validators.required]),
    Description: new FormControl('',[Validators.required]),
    categorie: new FormControl('',[Validators.required]),
  })

  categories: Categorie[] = [
    {value: 'Sport', viewValue: 'Sport'},
    {value: 'Technologies', viewValue: 'Technologies'},
    {value: 'Economie', viewValue: 'Economie'},
    {value: 'Société', viewValue: 'Société'},
    {value: 'Culture', viewValue: 'Culture'}
  ];
  constructor( private postservice:PostService, private router:Router,private route: ActivatedRoute ){ }
  postId: any
  post:any;
 
  ngOnInit(): void {
    this.postId= this.route.snapshot.params['id']
    this.post = this.postservice.getpostById(this.postId)
    this.updatepostForm = new FormGroup({
      titre: new FormControl('',[Validators.required]),
      Description: new FormControl('',[Validators.required]),
      categorie: new FormControl('',[Validators.required]),
      date: new FormControl(new Date().toDateString()),
      id : new FormControl( Math.floor(Math.random()*100))
    });

    this.updatepostForm.patchValue(this.post)
  }
 
  updatePost(){
    this.submitted = true;
    if(this.updatepostForm.invalid){
      return;
    }
    this.postservice.updatepostDataById(this.updatepostForm.value,this.postId);
    this.router.navigateByUrl('/list-post');
   
  }
}
