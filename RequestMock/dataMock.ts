import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import { medusaClient } from "@/lib/utils/medusaUtils";
import { StoreProductsListRes } from "@medusajs/medusa";
import { get } from "http";


function getRandomElement<T>(array: T[]): T {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

  const fetchRandomProducts = async (numberOfProducts: number): Promise<PricedProduct[]> => {
    
    return medusaClient.products.list().then((products) => {
      return Array.from({ length: numberOfProducts }, () => getRandomElement<PricedProduct>(products.products));
    });
  };

const fetchProducts = async (numberOfProducts : number) : Promise<PricedProduct[]> => {

    return medusaClient.products.list()
    .then((products) => {
        return Array(numberOfProducts).fill(products.products[0])
    });
}

export { fetchProducts, fetchRandomProducts } 