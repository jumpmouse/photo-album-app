import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivateContentGuard } from './core/private-content.guard';
import { PrivateContentResolver } from './core/private-content.resolver';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'login', pathMatch: 'full', component: LoginComponent },
  {
    path: '',
    canActivate: [PrivateContentGuard],
    resolve: {
      privateContentLoaded: PrivateContentResolver
    },
    children: [
      {
        path: 'albums',
        loadChildren: () =>
          import('./album-list/album-list.module').then(
            (m) => m.AlbumListModule
          ),
      },
      {
        path: 'album/:albumId/photos',
        loadChildren: () =>
          import('./photo-list/photo-list.module').then(
            (m) => m.PhotoListModule
          ),
      },
    ],
  },
  { path: '**', component: NotFoundComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
