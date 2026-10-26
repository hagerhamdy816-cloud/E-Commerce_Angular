import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, Output, output } from '@angular/core';
import {EventEmitter} from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  categories: string[] = []
  selectedCategory: string = 'all'

  @Output() categorySelected = new EventEmitter<string>()

  constructor(private _DataService: DataService) {
    this.loadCategories()
  }

  loadCategories() {
    this._DataService.getCategories().subscribe((res) => {
      this.categories = res
    })
  }

  onCategoryChange() {
    this.categorySelected.emit(this.selectedCategory)
  }

}
