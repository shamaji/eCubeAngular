import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from 'app/core/services/api.service';
import { MethodUtilityService } from 'app/core/services/Method-utility.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VariableService } from 'app/core/services/variable.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginRequest: any = {};
  loginForm: FormGroup;
  loginError = '';

  constructor(
    public router: Router,
    public apiService: APIService,
    public methodUtils: MethodUtilityService,
    public fb: FormBuilder) { }

  ngOnInit(): void {
    this.applyLoginValidation();
  }

  applyLoginValidation() {
    // login form-control property asignment
    this.loginForm = this.fb.group({
      username:
        [null, Validators.compose([Validators.required, Validators.pattern(VariableService.ONLY_SPACE_NOT_ALLOW)])],
      password: [null, Validators.compose([Validators.required])] // , Validators.pattern(this.apiService.PATTERN_FOR_PASSWORD)
    });
  }

  onLogin() {
    console.log('here login')
    this.router.navigate([VariableService.ADMIN_DASHBOARD]);
    return;
    // if (this.loginForm.valid) {
    //   this.apiService.loginMethod(VariableService.API_LOGIN, this.loginRequest, (response) => {
    //     if (!this.methodUtils.isNullUndefinedOrBlank(response)) {
    //       if (response['status'] === 200) {
    //         const loginResponse = response['data'];
    //         localStorage.setItem(VariableService.USER_DATA, loginResponse);
    //         this.router.navigate([VariableService.ADMIN_DASHBOARD]);
    //       } else {
    //         this.loginError = response['error']['message'];
    //       }
    //     } else {
    //       this.loginError = 'Response is null';
    //     }
    //   }
    //   );
    // }
  }

}
