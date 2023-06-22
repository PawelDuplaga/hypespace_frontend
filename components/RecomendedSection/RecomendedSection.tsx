import ProductViewTemplateA from "../ProductViewComponents/ProductViewTemplateA/ProductViewTemplateA"
import ProductType from "@/lib/Types/ProductType"
import './RecomendedSection.scss'




export default function RecomendedSection (products : ProductType[]) {

    let currProducts : ProductType[] = [
    { 
        id: "3215dszdfsd423",
        name: "Nike A",
        price: 299,
        description: "Lorem Ipsum Lorem ipsum" },
    { 
        id: "3215dszdfsd423",
        name: "Nike B",
        price: 449,
        description: "Lorem Ipsum Lorem ipsum" },
    { 
        id: "3215dszdfsd423",
        name: "Nike C",
        price: 599,
        description: "Lorem Ipsum Lorem ipsum" },
    ]


    let pro : ProductType = { 
        id: "3215dszdfsd423",
        name: "Nike C",
        price: 599,
        description: "Lorem Ipsum Lorem ipsum" }

    function mapRecomendedSection () {
        return currProducts.map((product) => (
            <ProductViewTemplateA
               {...product}
            //    type problem 
            //    do wytlumaczenia ocb
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