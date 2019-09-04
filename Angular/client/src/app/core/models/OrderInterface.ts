interface User {
  userId: number;
  name: string;
  age: number;
  email: string;
}

interface Product {
  productId: number;
  productName: string;
}

interface Order {
  orderId: number;
  userId: number;
  productId: number;
}

export interface IOrders {
  users: User[];
  products: Product[];
  order: Order[];
}
