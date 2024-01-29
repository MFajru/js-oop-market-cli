import Cloth from "./Cloth.js";
import Food from "./Food.js";

class Cart {
  constructor(products = []) {
    this.products = products;
  }

  isEmpty() {
    if (this.products.length <= 0) {
      console.log("Cart is empty");
      return true;
    }
    return false;
  }

  addProduct(item) {
    const exist = this.isExist(item)[0];
    const index = this.isExist(item)[1];
    if (exist) {
      this.products[index].qty += 1;
    } else {
      this.products.push(item);
    }
  }

  updateQuantity(item, newQty) {
    const exist = this.isExist(item)[0];
    const index = this.isExist(item)[1];
    if (!exist) {
      console.log("Product doesn't exist");
      return;
    }
    this.products[index].qty = newQty;
  }

  deleteProduct(item, qty = 1) {
    const exist = this.isExist(item)[0];
    const index = this.isExist(item)[1];

    if (!exist) {
      console.log("Product doesn't exist in cart.");
      return;
    }

    if (this.products[index].qty > qty) {
      this.products[index].qty -= qty;
    } else {
      this.products.splice(index, 1);
    }
  }

  isExist(newItem) {
    let index = this.products.findIndex((item) => {
      return item.product.name == newItem.product.name;
    });
    if (index < 0) {
      return [false, index];
    }
    return [true, index];
  }

  printListItem() {
    this.products.forEach((item) => {
      let list;
      if (item.product instanceof Food) {
        list = `Name: ${item.product.name}\nQty: ${item.qty}\nExpire date: ${item.product.exp}`;
      } else if (item.product instanceof Cloth) {
        list = `Name: ${item.product.name}\nQty: ${item.qty}\nSize: ${item.product.size}`;
      } else {
        list = `Name: ${item.product.name}\nQty: ${item.qty}`;
      }
      console.log(`${list}\n`);
    });
  }

  calculateTotalItemPrice() {
    let total = 0;
    const tax = 0.1;
    this.products.forEach((item) => {
      total += item.product.price;
    });
    total += total * tax;
    return total;
  }
}

export default Cart;
