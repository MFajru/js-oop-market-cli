import Cart from "./Cart.js";
import CartItem from "./CartItem.js";
import Cloth from "./Cloth.js";
import Food from "./Food.js";
import { createInterface } from "readline/promises";

`use strict`;

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e8; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}

function menu(myCart) {
  let readline = createInterface(process.stdin, process.stdout);
  const app = async () => {
    let i = 0;
    while (i === 0) {
      console.log("Menu");
      console.log(
        "1. Add product to cart\n2. List product in cart\n3. Pay\n4. Exit"
      );
      const menu = await readline.question("Choose menu: ");
      console.clear();
      switch (menu) {
        case "1":
          let name, price, exp, qty, size;
          console.clear();
          console.log("Product List");
          console.log("1. Food\n2. Cloth\n3. Back to menu");
          const prodMenu = await readline.question("Choose product: ");
          switch (prodMenu) {
            case "1":
              name = await readline.question("Food name: ");
              price = await readline.question("Food price: ");
              exp = await readline.question("Food expiry: ");
              qty = await readline.question("Food quantity: ");
              let myFood = new Food(name, parseInt(price), exp);
              let myFoodItem = new CartItem(myFood, parseInt(qty));
              myCart.addProduct(myFoodItem);
              console.clear();
              break;
            case "2":
              name = await readline.question("Cloth name: ");
              price = await readline.question("Cloth price: ");
              size = await readline.question("Cloth size: ");
              qty = await readline.question("Cloth quantity: ");
              let myCloth = new Cloth(name, parseInt(price), size);
              let myClothItem = new CartItem(myCloth, parseInt(qty));
              myCart.addProduct(myClothItem);
              console.clear();
              break;
          }
          break;
        case "2":
          console.log("Cart Item List");
          myCart.printListItem() + "\n";
          if (!myCart.isEmpty()) {
            sleep(3000);
          } else {
            sleep(1000);
          }
          break;
        case "3":
          let balance = "";
          let isInsufficient = true;
          const grandTotal = myCart.calculateTotalItemPrice();
          while (balance === "" && isInsufficient) {
            console.log(
              "Note: Only accept integer, if you input decimal number it will be round down."
            );
            balance = await readline.question("Input your balance: ");
            balance = parseInt(balance);
            if (!Number.isInteger(balance) || balance < 0) {
              console.log(
                "Please input an integer and it must be greater than or equal to 0.\n"
              );
              balance = "";
              sleep(1000);
              console.clear();
            } else if (balance - grandTotal < 0) {
              console.log(
                `Insufficient balance. You need at least ${grandTotal}\n`
              );
              balance = "";
              sleep(1000);
              console.clear();
            } else if (balance - grandTotal > 0) {
              console.log(`Your change: ${balance - grandTotal}\nThank you!`);
              isInsufficient = false;
              i = 5;
            } else {
              console.log("Thank you!");
              isInsufficient = false;
              i = 5;
            }
          }
          break;
        case "4":
          i = 5;
          break;
        default:
          console.clear();
          break;
      }
    }
    readline.close();
  };
  app();
}
function main() {
  let myFood = new Food("Roti", 2000, "20/10/2023");
  let myFoodItem = new CartItem(myFood, 2);
  let myCloth = new Cloth("Batik", 30000, "M");
  let myClothItem = new CartItem(myCloth, 5);

  const myCart = new Cart();

  myCart.addProduct(myFoodItem);
  myCart.addProduct(myClothItem);

  menu(myCart);

  //   myCart.deleteProduct(myClothItem, 5);
  //   myCart.updateQuantity(myFoodItem, 2);
}

main();
