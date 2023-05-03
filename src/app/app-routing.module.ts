import { SpecificCategoryComponent } from './category/specific-category/specific-category.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CheckoutComponent } from './cart/checkout/checkout.component';
import { AllordersComponent } from './cart/allorders/allorders.component';
import { BrandsComponent } from './brands/brands.component';
import { BrandDetailsComponent } from './brands/brand-details/brand-details.component';
import { CategoryComponent } from './category/category.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { FeauteredProductsComponent } from './feautered-products/feautered-products.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', canActivate: [AuthGuard], component: HomeComponent },
  { path: 'about', canActivate: [AuthGuard], component: AboutComponent },
  { path: 'wishlist', canActivate: [AuthGuard], component: WishlistComponent },

  { path: 'brandDetails/:Id', component: BrandDetailsComponent },
  { path: 'specificCategory/:ID', component: SpecificCategoryComponent },
  {
    path: 'featuredProducts',
    canActivate: [AuthGuard],
    component: FeauteredProductsComponent,
  },

  { path: 'products', canActivate: [AuthGuard], component: ProductsComponent },
  { path: 'brands', canActivate: [AuthGuard], component: BrandsComponent },

  {
    path: 'productDetails/:id',
    canActivate: [AuthGuard],
    component: ProductDetailsComponent,
  },
  {
    path: 'category',
    canActivate: [AuthGuard],
    component: CategoryComponent,
  },

  { path: 'signup', component: SignupComponent },
  { path: 'checkout/:id', component: CheckoutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgetPassword', component: ForgetPasswordComponent },

  { path: 'allorders', component: AllordersComponent },

  {
    path: 'setting',
    loadChildren: () =>
      import('./setting/setting.module').then((m) => m.SettingModule),
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then((m) => m.CartModule),
  },
  {
    path: 'brands',
    loadChildren: () =>
      import('./brands/brands.module').then((m) => m.BrandsModule),
  },
  {
    path: 'category',
    loadChildren: () =>
      import('./category/category.module').then((m) => m.CategoryModule),
  },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
