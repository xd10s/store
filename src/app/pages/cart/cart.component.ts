import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/modelos/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.components.html'
})
export class CartComponent implements OnInit{
  cart: Cart = {items: [{
    producto: "https://via.placeholder.com/150",
    nombre: "Zapatos",
    precio: 150,
    cantidad: 1,
    id: 1
  },
  {
    producto: "https://via.placeholder.com/150",
    nombre: "Zapatos",
    precio: 150,
    cantidad: 3,
    id: 1
  }
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
    this.dataSource = this.cart.items;
  }

  getTotal(items: Array<CartItem>): number{
    return this.cartService.getTotal(items); 
  }
}
