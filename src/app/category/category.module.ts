import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';
import { HttpClientModule } from '@angular/common/http';
import { SpecificCategoryComponent } from './specific-category/specific-category.component';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [CategoryComponent, SpecificCategoryComponent, SearchPipe],
  imports: [CommonModule, CategoryRoutingModule, HttpClientModule, FormsModule],
})
export class CategoryModule {}
