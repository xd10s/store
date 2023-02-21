import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/modelos/cart.model';

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

  ngOnInit(): void{
    this.dataSource = this.cart.items;
  }

  getTotal(items: Array<CartItem>): number{
    return items.map((item) => item.precio * item.cantidad).reduce((prev, current) => prev + current, 0)
  }
}
