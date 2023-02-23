import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Producto } from 'src/app/modelos/producto.model';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
})
export class ProductBoxComponent {

  producto: Producto | undefined = {
    id: 1,
    nombre: 'converse',
    precio: 100,
    categoria: 'ropa',
    descripcion: 'aaaaaaaaaaaa',
    img: 'https://via.placeholder.com/150',
  }

  @Input() fullWidthMode = false;
  @Output() addToCart = new EventEmitter();

  onAddToCart(): void{
    this.addToCart.emit(this.producto)
  }
}
