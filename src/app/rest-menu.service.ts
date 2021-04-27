import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Menu } from './menu';


@Injectable({
  providedIn: 'root'
})
export class RestMenuService {

  constructor(private http:HttpClient) { }

  public doInsertion(menu: Menu){


    return this.http.post("http://localhost:8080/menu/add", menu, {responseType: "text" as "json"});
  }
   
  public getMenus(){

    return this.http.get("http://localhost:8080/menu/getMenu");

  }

  }