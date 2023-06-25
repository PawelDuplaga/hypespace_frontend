import ProductViewTemplateA from "../ProductViewComponents/ProductViewTemplateA/ProductViewTemplateA"
import ProductType from "@/lib/Types/ProductType"
import './RecomendedSection.scss'
import Product from "@/lib/Models/Product"




export default function RecomendedSection (products : Product[]) {

    let currProducts : Product[] = [
    { 
        id: "3215dszdfsd423",
        name: "Nike A",
        price: 299,
        description: "Lorem Ipsum Lorem ipsum", 
        img : "./png/but1.png"   
    },
    { 
        id: "3215dszdfsd423",
        name: "Nike CCC",
        price: 449,
        description: "Lorem Ipsum Lorem ipsum", 
        img : "./png/but1.png"
    },
    { 
        id: "3215dszdfsd423",
        name: "Nike C",
        price: 599,
        description: "Lorem Ipsum Lorem ipsum", 
        img : "./png/but1.png" 
    },
    ]
    

    function mapRecomendedSection () {
        //currProducts.map((product) => console.log(product))
        return currProducts.map((product) => (
            <ProductViewTemplateA
               key = {product.id}
               {...product}
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