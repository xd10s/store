import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import { Cart, CartItem } from '../modelos/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = new BehaviorSubject<Cart>({items: []});

  constructor(private _snackBar: MatSnackBar) { }

  addToCart(item: CartItem): void{
    const items = [...this.cart.value.items]

    const itemInCart = items.find((_item) => _item.id === item.id)

    if(itemInCart){
      itemInCart.cantidad += 1;      
    }
    else{
      items.push(item);
    }

    this.cart.next({ items });
    this._snackBar.open('1 producto agregado al carrito', 'ok', { duration: 3000 });
    
  }

  getTotal(items: Array<CartItem>): number{
    return items.map((item) => item.precio * item.cantidad).reduce((prev, current) => prev + current, 0)
  }

  clearCart(): void{
    this.cart.next({ items: []});
    this._snackBar.open('Compra Eliminada', 'ok', {duration:3000});
  }
}
