import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { CreditsComponent } from './pages/credits/credits.component';
import { SalesComponent } from './pages/sales/sales.component';
import { FormComponent } from './components/forms/form/form.component';
import { TextFieldComponent } from './components/forms/text-field/text-field.component';
import { ButtonComponent } from './components/forms/button/button.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ModalFormComponent } from './components/forms/modal-form/modal-form.component'
import { FormsModule } from '@angular/forms';
import { InventoryComponent } from './pages/inventory/inventory.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreditsComponent,
    SalesComponent,
    FormComponent,
    TextFieldComponent,
    ButtonComponent,
    ProductCardComponent,
    HeaderComponent,
    HomeComponent,
    ModalFormComponent,
    InventoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
