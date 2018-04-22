import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from '../services/users.service'
import { patternValidator } from '../shared/pattern-validator';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  sub: Subscription;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.loginForm = new FormGroup({
      // validate form element
      email: new FormControl('', [Validators.required, patternValidator(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      password: new FormControl('', Validators.required),
      remember: new FormControl(),
    });
  }

  public login() {
    this.sub = this.usersService.login(this.loginForm.value).subscribe(
      data => {
        let auth_token = data.headers.get('Authorization');
        localStorage.setItem('auth-token', auth_token)
        localStorage.setItem('current-user', JSON.stringify(data.json()));
        window.location.href = '/';
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnDestroy() {
    if(this.sub != undefined){
      this.sub.unsubscribe();
    }
  }
}
