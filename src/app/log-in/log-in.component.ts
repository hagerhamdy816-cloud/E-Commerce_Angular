import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {
  constructor(private _DataService:DataService , private _Router:Router) { }

  loginForm = new FormGroup({
    username: new FormControl(null),
    password: new FormControl(null)
  })
  loginData(data:any){
    console.log(data)
    this._DataService.login(data.value).subscribe((res)=>{
      console.log(res)
      if(res.error==undefined){
        this._Router.navigate(['/home'])
        this._DataService.isLogin.next(true)
      }
    })
    
  }
}



