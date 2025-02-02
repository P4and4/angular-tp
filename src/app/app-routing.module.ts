import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CvComponent } from './cvTech/cv/cv.component';
import { LoginComponent } from './login/login.component';
import { TaskManagerComponent } from './task-manager/task-manager.component';
import { ColorComponent } from './color/color.component';
import { MiniWordComponent } from './mini-word/mini-word.component';
import { CardComponent } from './card/card.component';
import { DetailComponent } from './cvTech/detail/detail.component';
import { DeleteCvComponent } from './cvTech/delete-cv/delete-cv.component';
import { ErrorComponent } from './error/error.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ArticlesComponent } from './articles/articles.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuard } from './auth.guard';
import { RegisterComponent } from './register/register.component';
import { ArticleDetailComponent } from './articles/article-detail/article-detail.component';
import { PalestineMapComponent } from './palestine-map/palestine-map.component';


const routes: Routes = [
  {path: 'cv', children:[
    { path: '', component: CvComponent },
    { path: 'delete/:id', component: DeleteCvComponent },
    { path: ':id', component: DetailComponent },
  ]},
  { path: '', component: HomeComponent },

  { path: 'Login', component: LoginComponent},
  { path: 'Color', component: ColorComponent},
  { path: 'logout', component: LogoutComponent },
  { path: 'register', component: RegisterComponent },

  { path: 'card', component: CardComponent},
  { path: 'palestine-map', component: PalestineMapComponent},
  //{ path: 'PocAddStudents', component:  },
  { path: 'TaskManager', component: TaskManagerComponent },
  { path: "word", component: MiniWordComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'article/:id', component: ArticleDetailComponent },

    //en cas d'erreur
    { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
