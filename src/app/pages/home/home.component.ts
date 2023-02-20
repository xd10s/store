import { Component } from '@angular/core';

const ROWS_HEIGHT: {[id:number]:number} = {1:400, 3:335, 4:350};
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'  
})
export class HomeComponent {

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
}
