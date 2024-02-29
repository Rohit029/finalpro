import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { authGuard } from './guards/auth.guard';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { roleGuard } from './guards/role.guard';
import { ClientCrudComponent } from './components/client-crud/client-crud.component';
import { ClientComponent } from './components/client/client.component';
import { PlayVideoComponent } from './components/play-video/play-video.component';
import { TvshowComponent } from './components/tvshow/tvshow.component';
import { TvshowCrudComponent } from './components/tvshow-crud/tvshow-crud.component';
import { SongComponent } from './components/song/song.component';
import { SongCrudComponent } from './components/song-crud/song-crud.component';
import { PlayTvshowComponent } from './components/play-tvshow/play-tvshow.component';
import { MovieContentComponent } from './components/movie-content/movie-content.component';
import { TvshowsContentComponent } from './components/tvshows-content/tvshows-content.component';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { SongContentComponent } from './components/song-content/song-content.component';
import { FavoritePageComponent } from './components/favorite-page/favorite-page.component';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'home', component:HomeComponent },
  {path:'admin', component:AdminDashboardComponent, canActivate:[authGuard,roleGuard]},
  {path:'user-profile', component:UserProfileComponent},
  {path:'client', component:ClientComponent},
  {path:'client-crud', component: ClientCrudComponent},
  {path:'tvshow', component:TvshowComponent},
  {path:'tvshow-crud', component:TvshowCrudComponent},
  {path:'song', component:SongComponent},
  {path:'song-crud', component:SongCrudComponent},
  {path:'play-video/:id', component:PlayVideoComponent, canActivate:[authGuard]},
  {path:'play-tvshow/:id', component:PlayTvshowComponent, canActivate:[authGuard]},
  {path:'movie-content', component:MovieContentComponent},
  {path:'tvshow-content', component:TvshowsContentComponent},
  {path:'favorite', component:FavoriteComponent},
  {path:'song-content', component:SongContentComponent},
  {path:'favorite-page',component:FavoritePageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
