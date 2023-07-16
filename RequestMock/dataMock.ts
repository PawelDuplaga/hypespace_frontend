import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import { medusaClient } from "@/lib/utils/medusaUtils";
import { StoreProductsListRes } from "@medusajs/medusa";

const getProdPremise = async (numberOfProducts : number) : Promise<PricedProduct[]> => {

    return medusaClient.products.list()
    .then((products) => {
        return Array(numberOfProducts).fill(products.products[0])
    });
}

export { getProdPremise }