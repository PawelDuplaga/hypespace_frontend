class Product {
    id: string;
    name: string;
    price: number;
    description: string;
    img : string;

    constructor(id: string, name: string, price: number, description: string, img : string) {
      this.id = id;
      this.name = name;
      this.price = price;
      this.description = description;
      this.img = img
    }

  }
  
  export default Product;