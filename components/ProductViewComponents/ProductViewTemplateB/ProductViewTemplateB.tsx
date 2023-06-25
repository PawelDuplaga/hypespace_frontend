import './ProductViewTemplateB.scss'


export default function ProductViewTemplateB () {

    return (
        <div className='product-view-main-container'>
            <img className='product-img' src="./png/cytrus.png"/>
            <div className='product-info-container'>
                <div className='Frame-102 product-info'>
                    <div className='Frame-68 product-name-flex'>
                        <p className='product-name'>BUT A</p>
                    </div>
                    <div className='Frame-74 flex-1'>
                        <p className='product-price'>239,00 PLN</p>
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