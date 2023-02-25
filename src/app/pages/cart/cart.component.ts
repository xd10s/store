import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/modelos/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.components.html'
})
export class CartComponent implements OnInit{
  cart: Cart = {items: [
]};

  dataSource: Array<CartItem> = [];
  displayedColumns: Array<string> = [
    'producto',
    'nombre',
    'precio',
    'cantidad',
    'total',
    'action'
  ];

  constructor(private cartService: CartService){
  }

  ngOnInit(): void{
    
    this.cartService.cart.subscribe((_cart: Cart) => {
      this.cart = _cart;
      this.dataSource = this.cart.items;
    });
  }

  getTotal(items: Array<CartItem>): number{
    return this.cartService.getTotal(items); 
  }

  onClearCart(): void{
    this.cartService.clearCart();
  }

  onRemoveFromCart(item: CartItem): void{
    this.cartService.removeFromCart(item);
  }

  onAddCantidad(item: CartItem): void{
    this.cartService.addToCart(item);
  }

  onRemoveCantidad(item: CartItem): void{
    this.cartService.removeCantidad(item);
  }

}
