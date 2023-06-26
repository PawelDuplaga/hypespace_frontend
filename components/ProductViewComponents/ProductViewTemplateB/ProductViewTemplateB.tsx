import { defaultMaxListeners } from 'events'
import './ProductViewTemplateB.scss'
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"


export default function ProductViewTemplateB ({title, thumbnail, variants} : PricedProduct) {


    let defaultVariantPrice = variants[0].prices[0]

    return (
        <div className='product-view-main-container'>
            <img className='product-img' src={thumbnail}/>
            <div className='product-info-container'>
                <div className='Frame-102 product-info'>
                    <div className='Frame-68 product-name-flex'>
                        <p className='product-name'>{title}</p>
                    </div>
                    <div className='Frame-74 flex-1'>
                        <p className='product-price'>{defaultVariantPrice.amount/10} {defaultVariantPrice.currency_code}</p>
                        <div className='basket-circle-icon'>
                            <div className='circle'>
                                <img className="cart-icon" src="./icons/cart.svg"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}