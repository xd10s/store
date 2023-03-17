import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Producto } from 'src/app/modelos/producto.model';
import { CartService } from 'src/app/services/cart.service';
import { StoreService } from 'src/app/services/store.service';

const ROWS_HEIGHT: {[id:number]:number} = {1:400, 3:335, 4:350};
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'  
})
export class HomeComponent implements OnInit, OnDestroy {

  columnas = 3;
  categoria: string | undefined;
  filaAltura = ROWS_HEIGHT[this.columnas]
  productos: Array<Producto> | undefined;
  sort = 'desc';
  count = '12';
  productoSubcription: Subscription | undefined;


  constructor(private cartService: CartService, private storeService: StoreService){
    
  }

  ngOnInit(): void{
    this.getProductos();
  }

  getProductos(): void{
    this.productoSubcription = this.storeService.getAllProductos(this.count, this.sort)
    .subscribe((_productos) => {
      this.productos = _productos;
    });
  }
  
  onColumnsCountChange(colsNum: number): void{
    this.columnas = colsNum;
    this.filaAltura = ROWS_HEIGHT[this.columnas]
  }

  
  onItemsCountChange(newCount: number): void{
    this.count = newCount.toString();
    this.getProductos();
  }

  onSortChange(newSort: string): void{
    this.sort = newSort;
    this.getProductos();
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

  ngOnDestroy(): void {
    if(this.productoSubcription){
      this.productoSubcription.unsubscribe();
    }
  }
}
