import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { HomeComponent } from './home/home.component';
import { HomeQuarantineComponent } from './home-quarantine/home-quarantine.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CategoriesComponent } from './categories/categories.component';
import { ViewDetailComponent } from './view-detail/view-detail.component';
import { RegistrationComponent } from './registration/registration.component';
import { ContactusComponent } from './contactus/contactus.component';



const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'HOME'
      },
      {
        path: 'HOME',
        component: HomeComponent
      },
      {
        path: 'home-quarantine',
        component: HomeQuarantineComponent
      },
      {
        path: 'cartPage',
        component: CartPageComponent
      },
      {
        path: 'categories',
        component: CategoriesComponent
      },
      {
        path: 'viewDetail',
        component: ViewDetailComponent
      },
      {
        path: 'registration',
        component: RegistrationComponent
      },
      {
        path: 'contactUs',
        component: ContactusComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
