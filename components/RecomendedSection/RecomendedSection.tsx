import ProductViewTemplateA from "../ProductViewComponents/ProductViewTemplateA/ProductViewTemplateA"
import './RecomendedSection.scss'
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"

type ProductProps = {
    products: PricedProduct [];
}

const RecomendedSection : React.FC<ProductProps> = ({products}) => {

    if ( products != undefined && products.length > 3)
    products = products.slice(0,3)

    function mapRecomendedSection () {
        return products.map((product) => (
            <ProductViewTemplateA
               key = {product.id}
               product={product}
            />
        ));
    }

    return (
        <div className="SECTION_1 recomended-container">
            <div className="Frame-64 section-title">Polecamy</div>
            <div className="Frame 189 product-list">{mapRecomendedSection()}</div>
        </div>
    )
}

export default RecomendedSection