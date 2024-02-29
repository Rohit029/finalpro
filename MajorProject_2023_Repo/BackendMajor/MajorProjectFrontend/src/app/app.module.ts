import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { AuthService } from './service/auth.service';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { TokenInterceptor } from './Interceptors/token.interceptor';
import { ApiService } from './service/api.service';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { PlayVideoComponent } from './components/play-video/play-video.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ClientCrudComponent } from './components/client-crud/client-crud.component';
import { ClientComponent } from './components/client/client.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SongComponent } from './components/song/song.component';
import { TvshowComponent } from './components/tvshow/tvshow.component';
import { TvshowCrudComponent } from './components/tvshow-crud/tvshow-crud.component';
import { SongCrudComponent } from './components/song-crud/song-crud.component';
import { PlayTvshowComponent } from './components/play-tvshow/play-tvshow.component';
import { MovieContentComponent } from './components/movie-content/movie-content.component';
import { TvshowsContentComponent } from './components/tvshows-content/tvshows-content.component';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { FavoritePageComponent } from './components/favorite-page/favorite-page.component';
import { SongContentComponent } from './components/song-content/song-content.component';
import { SearchComponent } from './components/search/search.component';
import { SearchContentComponent } from './components/search-content/search-content.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    UserProfileComponent,
    AdminDashboardComponent,
    ClientCrudComponent,
    ClientComponent,
    PlayVideoComponent,
    HomeComponent,
    SongComponent,
    TvshowComponent,
    TvshowCrudComponent,
    SongCrudComponent,
    PlayTvshowComponent,
    MovieContentComponent,
    TvshowsContentComponent,
    FavoriteComponent,
    FavoritePageComponent,
    SongContentComponent,
    SearchComponent,
    SearchContentComponent,
    WishlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatSnackBarModule,
    MatGridListModule,
    MatSidenavModule, 
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    BrowserAnimationsModule,
  ],
  providers: [AuthService, ApiService,
    {
      provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
