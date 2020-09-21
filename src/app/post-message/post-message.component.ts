import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MessageService} from '../services/messageService'
@Component({
  selector: 'app-post-message',
  templateUrl: './post-message.component.html',
  styleUrls: ['./post-message.component.css']
})
export class PostMessageComponent implements OnInit {
  messageForm:FormGroup
  response
  errrorMessage
   re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(private formBuilder: FormBuilder, private messageService: MessageService) { }

  ngOnInit(): void {

    this.messageForm = this.formBuilder.group({
      fullName:['', Validators.required],
      email:['', Validators.required],
      message:['', Validators.required]
    })
  }
  get fullName() {
    return this.messageForm.get('fullName');
  }

  get email(){
    return this.messageForm.get('email')
  }
  
  get message(){
    return this.messageForm.get('message')
  }
 sendMessage(){
   if(this.messageForm.value.fullName.length > 3 && this.re.test(this.messageForm.value.email))
   {
    this.messageService.postMessage(this.messageForm.value).subscribe((res)=>{
        alert('Thanks for your interest. we will revert you in 24 hours..!')
        this.messageForm.reset()
    },err=>{
      this.errrorMessage = err
      alert(this.errrorMessage.error.message);
    })
   }
   else{
     if(!this.re.test(this.messageForm.value.email))
     {
      alert('Invalid email address')
     }
     else if(this.messageForm.value.fullName.length < 3){
       alert('Invalid Name')       
     }
   }
 }
}
