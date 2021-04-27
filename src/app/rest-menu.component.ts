import { Component, OnInit } from '@angular/core';
import {Menu } from '../menu';
import { Router } from '@angular/router';
import { RestMenuService } from '../rest-menu.service';

@Component({
  selector: 'app-rest-menu',
  templateUrl: './rest-menu.component.html',
  styleUrls: ['./rest-menu.component.scss']
})
export class RestMenuComponent implements OnInit {

  menu: Menu= new Menu("","");
  message: any;
  constructor(private service:RestMenuService, private router: Router) { }

  ngOnInit(): void {
  }
  public insertNow(){
    let resp=this.service.doInsertion(this.menu);
    resp.subscribe((data)=>this.message=data);
    this.router.navigate(["/menu"])
}
}