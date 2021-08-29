import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from './navbar/navbar.component';
import { CardUserComponent } from './card-user/card-user.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { CardResultComponent } from './card-result/card-result.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NavbarComponent,
    CardUserComponent,
    SearchBarComponent,
    CardResultComponent,
  ],
  imports: [CommonModule, FormsModule, BrowserModule, ReactiveFormsModule],
  providers: [],
  exports: [
    NavbarComponent,
    CardUserComponent,
    SearchBarComponent,
    CardResultComponent,
  ],
})
export class ComponentsModule {}
