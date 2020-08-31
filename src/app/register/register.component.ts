import { Component, OnInit } from '@angular/core';
import { LoginUser } from '../models/login-user';
import { AuthenticationService } from '../services/authentication.service';
import { RouterService } from '../services/router.service';
import { FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email: FormControl;
  loginUser: LoginUser;
  username: FormControl;
  password: FormControl;
  // username: string;
  // password: string;
  submitMessage: string;
  constructor(private authenticationService: AuthenticationService, private routerService: RouterService, public fb: FormBuilder) {
    this.email = new FormControl('', [Validators.required]);
    this.username = new FormControl('', [Validators.required]);
    this.password = new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(13)]);
    this.loginUser = new LoginUser();
  }


  ngOnInit() {
    

  }
  login() {
    this.routerService.routeToLogin();
  }
  register() {
    this.authenticationService.removeUser();
    this.loginUser.username = this.username.value;
    this.loginUser.password = this.password.value;
    console.log(this.loginUser);
    this.authenticationService.registerUser(this.loginUser);
}
}
