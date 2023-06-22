import ProductType from "@/lib/Types/ProductType"
import './ProductViewTemplateA.scss'


export default function ProductViewTemplateA (product : ProductType) {

    const productName : string = "Nike Atrox"
    const productPrice : string = "199.00PLN"
    const productPhotoPath : string = "./png/but1.png"
    



    return (
        <div className="Frame-186 main-container">
            <img className="product-img" src={productPhotoPath}/>
            <div className="Frame-144 product-info">
                <p>{`${productName} (${productPrice})`}</p>
                <img className="arrow" src="./icons/maki_arrow.svg"/>
            </div>
        </div>
    )

}