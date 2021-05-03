import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  loggedIn:boolean = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.loggedIn = localStorage.getItem('loggedIn') == "loggedIn" ? true : false;
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
