import { Component } from '@angular/core';
import { Producto } from 'src/app/modelos/producto.model';
import { CartService } from 'src/app/services/cart.service';

const ROWS_HEIGHT: {[id:number]:number} = {1:400, 3:335, 4:350};
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'  
})
export class HomeComponent {

  constructor(private cartService: CartService){
    
  }
  columnas = 3;
  categoria: string | undefined;
  filaAltura = ROWS_HEIGHT[this.columnas]

  onColumnsCountChange(colsNum: number): void{
    this.columnas = colsNum;
    this.filaAltura = ROWS_HEIGHT[this.columnas]
  }

  onShowCategory(nuevaCategoria: string): void{
    this.categoria = nuevaCategoria;
  }

  onAddToCart(producto: Producto): void{
    this.cartService.addToCart({
      producto: producto.img,
      nombre: producto.nombre,
      precio: producto.precio,
      cantidad: 1,
      id: producto.id
    })
  }
}
