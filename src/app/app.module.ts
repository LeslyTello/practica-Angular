import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { AuthorComponent } from './author/author.component';
import { AutoresService } from './autores.service';
import { FavoritoComponent } from './favorito/favorito.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TitleCasePipe } from './title-case.pipe';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { AddCourseComponent } from './add-course/add-course.component'; //TWO WAY BINDINGS
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { NewPassComponent } from './new-pass/new-pass.component';
import { WebComponent } from './web/web.component';
import { HttpClientModule } from '@angular/common/http';
import { AppErrorHandler } from './app-error-handler';
import { FollowersService } from './servicios/followers.service';
import { GithubComponent } from './github/github.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    AuthorComponent,
    FavoritoComponent,
    TitleCasePipe,
    PanelComponent,
    LikeComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    AddCourseComponent,
    SignupFormComponent,
    NewCourseFormComponent,
    NewPassComponent,
    WebComponent,
    GithubComponent,
    NavbarComponent,
    GithubProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'', component:AuthorComponent},
      {path:'followers', component:GithubComponent},
      {path:'profile/:id', component:GithubProfileComponent},
      {path:'**', component:NotFoundComponentComponent
      }
    ])
  ],
  providers: [
    CoursesService,
    AutoresService,
    FollowersService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*ROYER MOUDLE importar en imports RouterMpduel.forRoot() */