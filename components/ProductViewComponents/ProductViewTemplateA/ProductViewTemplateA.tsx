import ProductType from "@/lib/Types/ProductType"
import './ProductViewTemplateA.scss'
import Product from "@/lib/Models/Product"

export default function ProductViewTemplateA (product : Product) {

    return (
        <div className="Frame-186 main-container">
            <img className="product-img" src={product.img}/>
            <div className="Frame-144 product-info">
                <p>{`${product.name} (${product.price})`}</p>
                <img className="arrow" src="./icons/maki_arrow.svg"/>
            </div>
        </div>
    )

}