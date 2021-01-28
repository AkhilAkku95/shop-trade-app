import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../interfaces/product.interface';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: IProduct;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  getSize(value: string) {

    //Condition to check size is US based
    if (value.includes('US')) {
      const size = Number(value.split(' ').pop());

      switch (size) {
        case 8:
          return 'XS';
        case 9:
          return 'S';
        case 10:
          return 'M';
        case 11:
          return 'L';
        case 12:
          return 'XL';
        case 13:
          return 'XXL';
        default:
          return '';
      }
    }

    //First condition for string eg: xs,small and second condition for number eg: 38,40
    if (value.toLocaleLowerCase() === 'xs' || (Number(value) >= 33 && Number(value) <= 34)) {
      return 'XS';
    } else if (value.toLocaleLowerCase() === 'small' || (Number(value) > 34 && Number(value) <= 36)) {
      return 'S';
    } else if (value.toLocaleLowerCase() === 'medium' || (Number(value) > 36 && Number(value) <= 38)) {
      return 'M';
    } else if (value.toLocaleLowerCase() === 'large' || (Number(value) > 38 && Number(value) <= 41)) {
      return 'L';
    } else if (value.toLocaleLowerCase() === 'xl' || (Number(value) > 41 && Number(value) <= 43)) {
      return 'XL';
    } else if (value.toLocaleLowerCase() === 'xxl' || (Number(value) > 43 && Number(value) <= 46)) {
      return 'XXL';
    } else if (value.toLocaleLowerCase() === 'xxxl' || (Number(value) > 46 && Number(value) <= 48)) {
      return 'XXXL';
    } else {
      return;
    }
  }

  getDiscountPrice(postPrice: string, prePrice: string): number {
    return Math.trunc((((Number(prePrice) - Number(postPrice)) / Number(prePrice)) * 100));
  }

  onClickSize(product: IProduct, productSize: string) {

    product.selected_size = this.getSize(productSize);
    this.productService.selectedProductsCopy.push(product);

    this.productService.updateSelectedProduct(this.productService.selectedProductsCopy);
  }

}
