import { CartService } from '@shop/core/services/cart.service.ts.service';
import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';
import { IProduct } from '@mugan86/ng-shop-ui/lib/interfaces/product.interface';
import { CURRENCIES_SYMBOL, CURRENCY_LIST } from '@mugan86/ng-shop-ui';
@Component({
  selector: 'app-product-category-list',
  templateUrl: './product-category-list.component.html',
  styleUrls: ['./product-category-list.component.scss']
})
export class ProductCategoryListComponent {
  constructor(private router: Router, private cartService: CartService) { }
  @Input() title = 'Título de la categoría';
  @Input() productsList: Array<IProduct> = [];
  @Input() description = '';
  @Input() showDesc: boolean;
  myCurrency = CURRENCIES_SYMBOL[CURRENCY_LIST.US_DOLLAR]; // $ <=======================
  addToCart($event: IProduct) {
    console.log('Add to cart', $event);
    this.cartService.manageProduct($event);
  }
  showProductDetails($event: IProduct) {
    console.log('Show details', $event);
    this.router.navigate(['/games/details', +$event.id]);
  }
}
