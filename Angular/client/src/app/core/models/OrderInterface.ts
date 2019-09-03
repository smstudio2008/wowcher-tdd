export interface User {
  userId: number;
  name: string;
  age: number;
  email: string;
}

export interface Product {
  productId: number;
  productName: string;
}

export interface Order {
  orderId: number;
  userId: number;
  productId: number;
}

export interface Orders {
  users: User[];
  products: Product[];
  order: Order[];
}
