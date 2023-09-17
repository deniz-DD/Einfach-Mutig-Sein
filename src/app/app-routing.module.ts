import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { LerncoachingComponent } from './lerncoaching/lerncoaching.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { ImprintComponent } from './imprint/imprint.component';

const routes: Routes = [
  {path:'' , component: HomeComponent} , 
  {path: 'ueber-mich' , component: AboutMeComponent} , 
  {path: 'lerncoaching' , component: LerncoachingComponent} , 
  {path: 'blog' , component: BlogComponent} , 
  {path: 'kontakt' , component: ContactComponent}, 
  {path: 'impressum', component: ImprintComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
