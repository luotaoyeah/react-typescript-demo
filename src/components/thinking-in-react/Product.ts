class Product {
  category: string;
  name: string;
  price: string;
  stocked: boolean;

  constructor(category: string, price: string, stocked: boolean, name: string) {
    this.category = category;
    this.price = price;
    this.stocked = stocked;
    this.name = name;
  }
}

export default Product;