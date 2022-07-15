import { Component, Input } from '@angular/core';
import { ButtonModel } from '../button/button-model.model';
import { TextFieldModel } from '../text-field/text-field.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  @Input() textFields: TextFieldModel[] = [
    {
      isRequired: false,
      type: "text",
      placeHolder: "field"
    },
    {
      isRequired: false,
      type: "text",
      placeHolder: "field"
    }
  ];

  @Input() buttons: ButtonModel[] = [
    {
      type: "button",
      value: "Default"
    },
    {
      type: "submit",
      value: "Send"
    }
  ];
  constructor() { }

}
