import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CartComponent } from './cart/cart.component'
import { LoginComponent } from './login/login.component'
import { ProductDetailsComponent } from './product-details/product-details.component'
import { ProductListComponent } from './product-list/product-list.component'

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'cart', component: CartComponent },
  { path: 'products/:id', component: ProductDetailsComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
