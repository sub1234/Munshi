import { Component, OnInit } from '@angular/core';
import {menuItem} from './menuItem';
import {Router} from "@angular/router"
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  menuList:any =[]

  constructor(private router:Router) {
    this.menuList = menuItem;
   }

  ngOnInit(): void {
  }
  checkPremission(permissionId){

return true
  }

}
