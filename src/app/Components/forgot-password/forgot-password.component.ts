import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  emailVal: string;
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  clickForgotPassword(){
    this.loginService.forgotPassword(this.emailVal).subscribe(val=>{
      this.router.navigate(['login'])
    })
  }
}
