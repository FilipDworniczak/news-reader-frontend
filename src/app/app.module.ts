import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// 3rd party
import { ToastrModule } from 'ngx-toastr';

// custom
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsService } from './services/news.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
