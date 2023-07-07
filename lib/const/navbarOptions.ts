import { NavOptionType } from "../types/navOptionType";

const allProducts: NavOptionType = {
    name: "wszystkie produkty",
    icon : "",
    link : ""
}

const news: NavOptionType = {
    name: "nowości",
    icon: "",
    link: ""
}

const sale: NavOptionType = {
    name: "wyprzedaż",
    icon: "/icons/promotion.svg",
    link: ""
}

const aboutUs: NavOptionType = {
    name: "o nas ",
    icon : "",
    link : ""
}

const contact: NavOptionType = {
    name: "kontakt",
    icon: "",
    link: ""
}

const navbarOptions : NavOptionType[] = [
    allProducts,
    news,
    sale,
    aboutUs,
    contact,
]

export default navbarOptions