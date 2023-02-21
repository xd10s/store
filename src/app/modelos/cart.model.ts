export interface Cart{
    items: Array<CartItem>;
}

export interface CartItem{
    producto: string;
    nombre: string;
    precio: number;
    cantidad: number;
    id: number;
}