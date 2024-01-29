import Product from "./Product.js";

class Food extends Product {
  constructor(name, price, exp) {
    super(name, price);
    this.exp = exp;
  }
}
export default Food;
