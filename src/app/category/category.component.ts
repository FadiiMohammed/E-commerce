import { Component, OnInit } from '@angular/core';
import { CategoryService } from './category.service';
import { CategoryData } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  categoriesData: CategoryData[] = [];
  searchTerm: string = '';
  constructor(private _categoryService: CategoryService) {}
  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this._categoryService.getCategories().subscribe({
      next: (res) => {
        this.categoriesData = res.data;
        console.log(this.categoriesData);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
