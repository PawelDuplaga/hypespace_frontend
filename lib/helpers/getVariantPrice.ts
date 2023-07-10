import getDefaultRegion from "../const/regionInfo";
import { PricedVariant } from "@medusajs/medusa/dist/types/pricing"
import { formatVariantPrice } from "medusa-react"

const getDefaultVariantPrice = (pricedVariant : PricedVariant) => {
    return formatVariantPrice({variant: pricedVariant, region: getDefaultRegion()});
}

export {getDefaultVariantPrice};