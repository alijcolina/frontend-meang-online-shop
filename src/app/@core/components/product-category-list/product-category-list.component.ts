import { Component, Input } from '@angular/core';
import { IProduct } from '@mugan86/ng-shop-ui/lib/interfaces/product.interface';
import { CURRENCIES_SYMBOL, CURRENCY_LIST } from '@mugan86/ng-shop-ui';
@Component({
  selector: 'app-product-category-list',
  templateUrl: './product-category-list.component.html',
  styleUrls: ['./product-category-list.component.scss']
})
export class ProductCategoryListComponent {
  constructor() { }
  @Input() title = 'Título de la categoría';
  @Input() productsList: Array<IProduct> = [];
  myCurrency = CURRENCIES_SYMBOL[CURRENCY_LIST.US_DOLLAR]; // $ <=======================
  addToCart($event: IProduct) {
    console.log('Add to cart', $event);
  }
  showProductDetails($event: IProduct) {
    console.log('Show details', $event);
  }
}
