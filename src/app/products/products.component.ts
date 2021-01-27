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
    console.log(event);

    switch (event) {
      case 'Recommended':
        this.getProductList();
        break;
      case `What's New`:
        this.products.reverse();
        break;
      case 'Price: High to Low':
        debugger
        this.products.sort((a: IProduct, b: IProduct) => Number(b.price) - Number(a.price));
        break;
      case 'Price: Low to High':
        debugger
        this.products.sort((a: IProduct, b: IProduct) => Number(a.price) - Number(b.price));
        break;
    }
  }

  onFilterList(event: string) {
    this.selectedFilter = event;
    this.getProductList();
    if (event !== 'All Products') {
      this.products = this.products.filter((product) => product.tag.toLowerCase() === event.toLowerCase());
    }
  }

}
