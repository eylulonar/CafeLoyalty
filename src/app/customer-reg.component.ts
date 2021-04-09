import { Component, OnInit } from '@angular/core';
import { CustRegistrationService } from '../cust-registration.service';
import { Customer } from '../customer';


@Component({
  selector: 'app-registration',
  templateUrl: './customer-reg.component.html',
  styleUrls: ['./customer-reg.component.scss']
})
export class CustomerRegComponent implements OnInit {


  customer: Customer= new Customer("","","","","","");
  message: any;
  constructor(private service:CustRegistrationService) { }

  ngOnInit() {
    
  }
  public registerNow(){
    let resp=this.service.doRegistration(this.customer);
    resp.subscribe((data)=>this.message=data);
  }
  

}


