import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.css']
})
export class TextFieldComponent {
  textValue = "";

  @Input("input-type") inputType = "text";
  @Input() classNames = "tf-rounded";
  @Input() placeHolder:string | undefined = "";
  @Input() isRequired = false;
  @Output() value = new EventEmitter<string>();
  constructor() { }

  onEnterIsPressed(event: KeyboardEvent){
    if( event.key.toLowerCase() === "enter"){
      this.value.emit(this.textValue);
      this.textValue = "";
    }
  }
}
