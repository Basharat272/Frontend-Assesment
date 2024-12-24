import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-sort-popup',
  templateUrl: './sort-popup.component.html',
  styleUrls: ['./sort-popup.component.scss'],
})
export class SortPopupComponent {
  @Output() sortChanged = new EventEmitter<string>();
  @Input() isVisible: boolean | undefined;

  sortDirection: string = '';

  onSort(direction: string) {
    this.sortDirection = direction;
  }

  onReset() {
    this.sortDirection = '';
    this.sortChanged.emit(this.sortDirection);
    this.isVisible = false
  }

  applySort() {
    this.sortChanged.emit(this.sortDirection);
    this.isVisible = false;
  }
}
