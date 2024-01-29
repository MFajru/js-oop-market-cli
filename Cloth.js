import Product from "./Product.js";

class Cloth extends Product {
  constructor(name, price, size) {
    super(name, price);
    this.size = size;
  }
}

export default Cloth;
