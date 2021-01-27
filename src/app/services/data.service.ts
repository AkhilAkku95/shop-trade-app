import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  filterOptions = [
    'All Products',
    'Tee Shirts',
    'Denim',
    'Sweatshirts',
    'Polo Tee Shirts',
    'Shirt'
  ];

  sortOptions = [
    'Recommended',
    `What's New`,
    'Price: High to Low',
    'Price: Low to High'
  ]
  constructor() { }
}
