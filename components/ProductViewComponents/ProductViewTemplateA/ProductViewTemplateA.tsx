import './ProductViewTemplateA.scss'
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"

type ProductProps = {
    product : PricedProduct
}

const ProductViewTemplateA : React.FC<ProductProps> = ({product : {title, thumbnail, variants}}) => {

    let defaultVariantPrice = variants[0].prices[0]

    return (
        <div className="Frame-186 main-container">
            <img className="product-img" src={thumbnail as string}/>
            <div className="Frame-144 product-info">
                <p>{title} ({(defaultVariantPrice.amount/100).toFixed(2)} {defaultVariantPrice.currency_code})</p>
                <img className="arrow" src="./icons/maki_arrow.svg"/>
            </div>
        </div>
    )

}

export default ProductViewTemplateA