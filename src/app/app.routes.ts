import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ParticularDetailsComponent } from './component/particular-details/particular-details.component';

export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'category_details/:id',component:ParticularDetailsComponent}
];
