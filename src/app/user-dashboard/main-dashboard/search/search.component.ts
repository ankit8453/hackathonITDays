import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ServeService} from  'C:/Users/HP/Desktop/internship/hackathonITDays/src/app/serve/serve.service';
import * as path from 'path';
import { Serve } from '../../../serve/serve';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  noteForm!: FormGroup
  noteData: any = []
  noteObj: Serve ={
    id: '',
    place: '',
    mobile: 0,
    desc: '',
    food_img: undefined
  }
  constructor(private fb:FormBuilder, private serveService:ServeService) {
    this.noteForm = this.fb.group({
      place:['', Validators.required],
      decription:['', Validators.required],
      image:['', Validators.required],
      mobile:['', Validators.required],
    })
   }

  ngOnInit(): void {
    this.getAllNotes()
  }
  addNote(){
    const {value} = this.noteForm
    console.log(value);
    this.noteObj.id ='',
    this.noteObj.place =value.place,
    this.noteObj.mobile =value.mobile,
    this.noteObj.desc =value.decription,
    this.noteObj.food_img =value.image

    this.serveService.addNote(this.noteObj).then((note)=>{
      if(note){
        alert("Item Added Sucessfull");
        this.noteForm.reset();
      }
    })
    
  }
  // get data
  getAllNotes(){
    this.serveService.getNotes().subscribe((res:Serve[])=>{
      console.log(res)
      this.noteData = res;
    })
  }

  searchValue : string ="";
}