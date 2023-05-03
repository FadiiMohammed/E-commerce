import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { ActivatedRoute } from '@angular/router';
import { CategoryData } from '../category';

@Component({
  selector: 'app-specific-category',
  templateUrl: './specific-category.component.html',
  styleUrls: ['./specific-category.component.css'],
})
export class SpecificCategoryComponent implements OnInit {
  categoryID: string = '';
  categoryDetails: CategoryData = {} as CategoryData;
  constructor(
    private _categoryService: CategoryService,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((res: any) => {
      this.categoryID = res.params.ID;
    });
    this.getSpecificCategory();
  }

  getSpecificCategory() {
    this._categoryService.getSpecificCategory(this.categoryID).subscribe({
      next: (res) => {
        this.categoryDetails = res.data;
        console.log(this.categoryDetails);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
