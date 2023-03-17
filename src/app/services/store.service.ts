import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../modelos/producto.model';

const STORE_BASE_URL = 'https://fakestoreapi.com';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private httpClient: HttpClient) { }

  getAllProductos(limit = '12', sort = 'desc'): Observable<Array<Producto>>{
    return this.httpClient.get<Array<Producto>>(
      `${STORE_BASE_URL}/products?sort=${sort}&limit=${limit}`
    )
  }
}


