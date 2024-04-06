import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Register } from 'src/app/models/register.interface';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AuthData } from 'src/app/models/auth-data.interface';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent{

  register!: Register;
  user!: AuthData | null;

  constructor(private authSrv: AuthService, private router: Router){}

 

  onSubmit(form: NgForm){
    console.log(form.value)
    try{
      this.authSrv.signin(form.value).subscribe();
      this.router.navigate(['/login']);
    }catch (error){
      console.error(error);
    }
  }
}
