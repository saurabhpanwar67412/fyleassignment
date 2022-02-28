import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PaginationComponentComponent } from './pagination-component/pagination-component.component';
import { UserDetailsComponentComponent } from './user-details-component/user-details-component.component';
import { MatGridListModule } from '@angular/material/grid-list'; 
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { RepoComponent } from './repo/repo.component';
import {MaterialExampleModule} from '../meterial.module';
import { CustomHttpInterceptor } from './services/http-interceptor';



@NgModule({
  declarations: [
    AppComponent,
    PaginationComponentComponent,
    UserDetailsComponentComponent,
    RepoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    HttpClientModule,
    MatGridListModule,
    MatPaginatorModule,
    MatCardModule,
    MatIconModule,
    MaterialExampleModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: CustomHttpInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
