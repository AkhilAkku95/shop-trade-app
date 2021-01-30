import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Output() filterEvent = new EventEmitter<any>();
  filterOptions = this.dataService.filterOptions;
  sortOptions = this.dataService.sortOptions;
  selectedFilter = this.filterOptions[0];
  selectedSort = this.sortOptions[0];
  showSortOption = false;
  selectedIndex = 0;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  onClickFilter(option: string, index: number) {
    this.selectedIndex = index;
    this.selectedFilter = option;
    this.sendData();
  }

  onClickSort(option: string) {
    this.selectedSort = option;
    this.sendData();
  }

  sendData() {
    const filterData = {
      filter: this.selectedFilter,
      sort: this.selectedSort
    }

    this.filterEvent.next(filterData);
  }


}
