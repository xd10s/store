import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filtros',
  templateUrl: 'filtros.component.html'   
})

export class FiltrosComponent {

  @Output() verCategoria = new EventEmitter<string>();

  categorias = ['ropa', 'alimentos', 'aseo'];

  onShowCategory(categoria: string): void{
    this.verCategoria.emit(categoria);
  }
}


