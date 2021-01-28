import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { IProduct } from '../interfaces/product.interface';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  pageUrl: string;
  count = 0;

  constructor(private router: Router, private productService: ProductService) { }
  ngOnInit(): void {
    this.productService.selectedProductSubscriber().subscribe((res: IProduct[]) => {
      this.count = res.length;
    });
   
  }

  onClickCart() {
    this.router.navigate(['/cart']);
  }

  onClickShop() {
    this.router.navigate(['/shop']);
  }

}
