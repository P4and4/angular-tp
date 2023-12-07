import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ColorComponent } from './color/color.component';
import { LoginComponent } from './login/login.component';
import { TaskManagerComponent } from './task-manager/task-manager.component';
import { DefaultImagePipe } from './pipes/default-image.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RainbowDirective } from './directives/rainbow.directive';
import { MiniWordComponent } from './mini-word/mini-word.component';
import { FilsComponent } from './fils/fils.component';
import { CardComponent } from './card/card.component';
import { CustomDirective } from './custom-directive.directive';
import {CvComponent} from "./cvTech/cv/cv.component";
import {ListeCvComponent} from "./cvTech/liste-cv/liste-cv.component";
import {ItemCvComponent} from "./cvTech/item-cv/item-cv.component";
import {DetailCvComponent} from "./cvTech/detail-cv/detail-cv.component";
import { EmbaucheComponent } from './cvTech/embauche/embauche.component';
import { CommonModule, NgIf } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { DetailComponent } from './cvTech/detail/detail.component';
import { DeleteCvComponent } from './cvTech/delete-cv/delete-cv.component';
import {ObservableComponent} from "./observable/observable.component";
import { HttpComponent } from './http/http.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ColorComponent,
    LoginComponent,
    TaskManagerComponent,
    DefaultImagePipe,
    RainbowDirective,
    MiniWordComponent,
    FilsComponent,
    CardComponent,
    CustomDirective,
    DetailComponent,
    DeleteCvComponent,
    ObservableComponent,
    HttpComponent,
    //EmbaucheComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ListeCvComponent,
    DetailCvComponent,
    ItemCvComponent,
    EmbaucheComponent,
    CvComponent,
    NgIf,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      progressBar: true,
      timeOut: 3000, // Set the duration for how long the toast will be displayed
      closeButton: true,
    }),
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
