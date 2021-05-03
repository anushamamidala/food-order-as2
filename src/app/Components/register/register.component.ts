import { Component, OnInit } from '@angular/core';
import { Validators,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/Services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
registerForm=this.fb.group({
  name:["",Validators.required],
  email:["",Validators.required],
  password:["",Validators.required],
  confirmPassword:["",Validators.required],
})
  constructor(private fb:FormBuilder, private registerService: RegisterService, private router: Router) { }

  ngOnInit(): void {
  }
  clickRegister(){
    this.registerService.registerUser(this.registerForm.value).subscribe(user=>{
      this.router.navigate(["login"]);
    })
  }
}
