import { HygraphImage } from "./articles";

export interface Product {
  id: string;
  name: string;
  affiliateLink: string;
  image: HygraphImage;
  description?: string;
  createdAt: string;
}

export interface ProductsConnection {
  recommendedProducts: Product[];
  recommendedProductsConnection: {
    aggregate: {
      count: number;
    };
  };
}