import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { VariableService } from 'app/core/services/variable.service';
import { Users } from 'app/core/models/users.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  // userType = new Users();
  userObj: any = {};
  userList: Users[] = [
    { id: 1, userType: "admin",userName: "one", password: '123', firstName: 'f', lastName: 'l', mobile: '12345678', status: true },
    { id: 2, userType: "user", userName: "two", password: '123', firstName: 'a', lastName: 'b', mobile: '32323232', status: true }
  ];
  userForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.applyLoginValidation();
  }

  applyLoginValidation() {
    this.userForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.pattern(VariableService.PATTERN_FOR_ALPHABATES_NUMBER_AND_SPACE)]),
      lastName: new FormControl('', [Validators.required, Validators.pattern(VariableService.PATTERN_FOR_ALPHABATES_NUMBER_AND_SPACE)]),
      userName: new FormControl('', [Validators.required, Validators.pattern(VariableService.PATTERN_FOR_ALPHABATES_NUMBER_AND_SPACE)]),
      password: new FormControl('', [Validators.required, Validators.pattern(VariableService.PATTERN_FOR_ALPHABATES_NUMBER_AND_SPACE)]),
      mobile: new FormControl('', [Validators.required, Validators.pattern(VariableService.PATTERN_FOR_MOBILE_NO)]),
      userType: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    console.log(this.userObj);
  }

}
