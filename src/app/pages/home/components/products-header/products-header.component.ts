import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: 'products-header.components.html',
  
})
export class ProductsHeaderComponent {
  @Output() ContadorColumnas = new EventEmitter<number>();
  sort = 'desc';
  productoShowContador = 12;

  onSortUpdate(newSort: string): void{
    this.sort = newSort
  }

  onItemsUpdate(count: number): void{
    this.productoShowContador = count;
  }

  onColumnsUpdate(colsNum: number):void{
    this.ContadorColumnas.emit(colsNum);
  }

}
