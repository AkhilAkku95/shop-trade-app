import { Component, OnInit } from '@angular/core';
import { IProduct } from '../interfaces/product.interface';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  products: IProduct[];
  total: number;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getPurchasedProducts();
    this.getTotal();
  }

  getPurchasedProducts() {
    this.products = this.productService.selectedProductsCopy;
  }

  getTotal() {
    this.total = this.products.reduce((total, item) => total + Number(item.price), 0);
  }

  getSelectedSize(product: IProduct) {
    return
  }

  onRemoveItem(index: number) {
    this.productService.selectedProductsCopy.splice(index, 1);
    this.productService.updateSelectedProduct(this.productService.selectedProductsCopy);
    this.getPurchasedProducts();
    this.getTotal();
  }
}
