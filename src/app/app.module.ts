import { NgModule, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TooltipModule } from 'primeng/tooltip';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FeauteredProductsComponent } from './feautered-products/feautered-products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MainSliderComponent } from './main-slider/main-slider.component';
import { SearchTermPipe } from './search-term.pipe';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';
import { CardComponent } from './card/card.component';
import { StringPipe } from './string.pipe';
import { HttpInterceptorInterceptor } from './http-interceptor.interceptor';
import { LoaderComponent } from './loader/loader.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { MegaMenuModule } from 'primeng/megamenu';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  declarations: [
    AppComponent,
    AboutComponent,
    ProductsComponent,
    HomeComponent,
    CategoriesComponent,
    SignupComponent,
    LoginComponent,
    NotfoundComponent,
    NavbarComponent,
    FeauteredProductsComponent,
    ProductDetailsComponent,
    MainSliderComponent,
    SearchTermPipe,
    CardComponent,
    StringPipe,
    LoaderComponent,
    WishlistComponent,
    ForgetPasswordComponent,
    FooterComponent,
  ],
  imports: [
    TooltipModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    CardModule,
    ButtonModule,
    ToastModule,
    NgHttpLoaderModule.forRoot(),
    MegaMenuModule,
    ConfirmDialogModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
