import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service'
import { patternValidator } from '../shared/pattern-validator';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

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
    console.log("logining");
    this.usersService.login(this.loginForm.value).subscribe(
      data => {
        let auth_token = data.headers.get('Authorization');
        localStorage.setItem('auth-token', auth_token)
        localStorage.setItem('current-user', JSON.stringify(data.json()));
        window.location.href = '/';
      },
      error => {
        console.log(error);
        console.log("invalid");
      }
    );
  }
}
