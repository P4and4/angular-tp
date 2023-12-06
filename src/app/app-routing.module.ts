import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CvComponent } from './cvTech/cv/cv.component';
import { LoginComponent } from './login/login.component';
import { TaskManagerComponent } from './task-manager/task-manager.component';
import { ColorComponent } from './color/color.component';
import { MiniWordComponent } from './mini-word/mini-word.component';
import { CardComponent } from './card/card.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cv', component: CvComponent },
  { path: 'cv/:id', component: CvComponent },

  { path: 'Login', component: LoginComponent},
  { path: 'Color', component: ColorComponent},

  { path: 'card', component: CardComponent},
  //{ path: 'PocAddStudents', component:  },
  { path: 'TaskManager', component: TaskManagerComponent },
  { path: "word", component: MiniWordComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
