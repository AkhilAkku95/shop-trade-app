import { Component, OnInit } from '@angular/core';
import { IProduct } from '../interfaces/product.interface';
import { DataService } from '../services/data.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: IProduct[];
  selectedFilter = this.dataService.filterOptions[0];
  selectedSort = this.dataService.sortOptions[0];

  constructor(private productService: ProductService, private dataService: DataService) { }

  ngOnInit(): void {
    this.getProductList();
  }
  getProductList() {
    this.productService.getProducts().subscribe((res: IProduct[]) => {
      this.products = res;
    })
  }

  onSortList(event: string) {
    switch (event) {
      case 'Recommended':
        this.products.sort((a: IProduct, b: IProduct) => a.id - b.id);
        break;
      case `What's New`:
        this.products.reverse();
        break;
      case 'Price: High to Low':
        this.products.sort((a: IProduct, b: IProduct) => Number(b.price) - Number(a.price));
        break;
      case 'Price: Low to High':
        this.products.sort((a: IProduct, b: IProduct) => Number(a.price) - Number(b.price));
        break;
    }
  }

  onFilterList(event: any) {
    this.selectedFilter = event.filter;
    this.products = [];

    this.getProductList();
    if (event.filter === 'All Products') {
      this.onSortList(event.sort);
      return;
    }

    this.products = this.products.filter((product) => product.tag.toLowerCase() === event.filter.toLowerCase());

    switch (event.sort) {
      case 'Recommended':
        this.products.sort((a: IProduct, b: IProduct) => a.id - b.id);
        break;
      case `What's New`:
        this.products.reverse();
        break;
      case 'Price: High to Low':
        this.products.sort((a: IProduct, b: IProduct) => Number(b.price) - Number(a.price));
        break;
      case 'Price: Low to High':
        this.products.sort((a: IProduct, b: IProduct) => Number(a.price) - Number(b.price));
        break;
    }

  }

}
