import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth/auth.service';
interface IMenu{
  text:string;
  icon:string;
  link:string;
  isActive:boolean 
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  constructor(private _AuthService:AuthService) {

  }
  isManager():boolean{
return this._AuthService.role =='Manager' ? true : false;
  }
  isEmployee():boolean{
    return this._AuthService.role =='Employee' ? true : false;
      }
menu:IMenu[]=[
  {
    text:'Users',
    icon:'fa-solid fa-table-list',
    link:'/dashboard/user/user-recipes',
    isActive:this.isEmployee() 
  },
  {
    text:'Projects',
    icon:'fa-solid fa-table-list',
    link:'/dashboard/user/user-recipes',
    isActive:this.isEmployee() 
  },  {
    text:'Tasks',
    icon:'fa-solid fa-table-list',
    link:'/dashboard/user/user-recipes',
    isActive:this.isEmployee() 
  },  {
    text:'UsersProjects',
    icon:'fa-solid fa-table-list',
    link:'/dashboard/user/user-recipes',
    isActive:this.isEmployee() 
  },
  {
    text:'UserTasks',
    icon:'fa-solid fa-table-list',
    link:'/dashboard/user/user-recipes',
    isActive:this.isEmployee() 
  },



];
}
