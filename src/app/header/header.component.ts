import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service'
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUser: any;
  loggedIn: boolean;
  logoutSub: Subscription;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('current-user'));
    if(this.currentUser){
      this.loggedIn = true;
      console.log("logged in");
    }
    else{
      this.loggedIn = false;
    }
  }

  logout() {
    setTimeout(()=> {
      let user = JSON.parse(localStorage.getItem('current-user'));
      this.logoutSub = this.usersService.logout(user.id).subscribe(
        data => {
          console.log(data.json());
          localStorage.removeItem('current-user');
          localStorage.removeItem('auth-token');
          this.loggedIn = false;
          document.location.reload();
        }, err =>{
          console.log("error");
        }
      )
    }, 5000);
  }

  ngOnDestroy() {
    if(this.logoutSub != undefined) {
      this.logoutSub.unsubscribe();
    }
  }
}
