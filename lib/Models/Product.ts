class Product {
    id: string;
    name: string;
    price: number;
    description: string;
  
    constructor(id: string, name: string, price: number, description: string) {
      this.id = id;
      this.name = name;
      this.price = price;
      this.description = description;
    }
  
    calculateDiscountedPrice(discountPercentage: number): number {
      const discountedPrice = this.price * (1 - discountPercentage);
      return Math.round(discountedPrice * 100) / 100;
    }
  }
  
  export default Product;