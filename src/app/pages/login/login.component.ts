import { Component, OnInit } from '@angular/core';
import { ButtonModel } from 'src/app/components/forms/button/button-model.model';
import { TextFieldModel } from 'src/app/components/forms/text-field/text-field.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginTextFields: TextFieldModel [] = [
    {
      isRequired: true,
      type: "text",
      placeHolder: "username"
    },
    {
      isRequired: true,
      type: "password",
      placeHolder: "password"
    }
  ];

  loginButtons: ButtonModel [] = [
    {
      type: "submit",
      value: "Sign in"
    },
    {
      type: "button",
      value: "Sign up"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
