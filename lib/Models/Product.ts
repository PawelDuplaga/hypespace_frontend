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
  
    calculateDiscountedPrice(discountPercentage: number): number {
      const discountedPrice = this.price * (1 - discountPercentage);
      return Math.round(discountedPrice * 100) / 100;
    }
  }
  
  export default Product;