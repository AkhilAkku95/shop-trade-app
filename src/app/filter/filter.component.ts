import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Output() filterEvent = new EventEmitter<any>();
  @Output() sortEvent = new EventEmitter<any>();
  filterOptions = this.dataService.filterOptions;
  sortOptions = this.dataService.sortOptions;
  selectedFilter = this.filterOptions[0];
  selectedSort = this.sortOptions[0];
  showSortOption = false;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  onClickFilter(option: string) {
    this.filterEvent.next(option);
    this.selectedFilter = option;
  }

  onClickSort(option: string) {
    this.sortEvent.next(option);
    this.selectedSort = option;
  }

}
