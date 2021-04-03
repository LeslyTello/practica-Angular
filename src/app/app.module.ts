import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { AuthorComponent } from './author/author.component';
import { AutoresService } from './autores.service';
import { FavoritoComponent } from './favorito/favorito.component';
import { FormsModule } from '@angular/forms';
import { TitleCasePipe } from './title-case.pipe';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component'; //TWO WAY BINDINGS

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    AuthorComponent,
    FavoritoComponent,
    TitleCasePipe,
    PanelComponent,
    LikeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    CoursesService,
    AutoresService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
