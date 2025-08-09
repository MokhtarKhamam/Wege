  export interface Product {
    id: number;
    title: string;
    price: number;
    colors: string[];
    description: "description 1";
    images: string[];
    isFavorite: boolean;
    isInCart: boolean;
    createdAt: string;
  }

 export  interface ProductCart extends Product {
  quantity: number;
}
