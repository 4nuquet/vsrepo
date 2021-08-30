import { HttpClientModule } from '@angular/common/http';
import { GithubService } from './services/github.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { HomeComponent } from './pages/home/home.component';
import { GlobalStoreModule } from './store/store.module';
import { UtilService } from './services/util.service';
@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    HttpClientModule,
    GlobalStoreModule,
  ],
  providers: [GithubService, UtilService],
  bootstrap: [AppComponent],
})
export class AppModule {}
