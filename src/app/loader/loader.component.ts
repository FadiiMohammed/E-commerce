import { Component } from '@angular/core';
import { LoaderService } from '../loader.service';
import { BehaviorSubject, delay } from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css'],
})
export class LoaderComponent {
  title = 'angular-boilerplate';
  loading: boolean = false;

  constructor(private _loading: LoaderService) {}
}
