import { Component, OnInit } from '@angular/core';
import {RouteConfigLoadEnd, Router, ROUTER_CONFIGURATION} from '@angular/router';
import { CustomerRegComponent } from '../customer-reg/customer-reg.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {
  title ='workspace1';
  
  ngOnInit(): void {
  }

  
  constructor(private router:Router) { }
  
    doRegister()  {
     
      this.router.navigate(['/customerregister']);
    }

 
}

