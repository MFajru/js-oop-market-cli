# Store CLI

## Rule

- do frequently commit

## Learning Competencies

- Using input/output console
- Able to implement oop in javascript
- Able to implement and modeling javascript with real case scenario

## Exercise

### Overview

Store cli is cli app that user can buy product and system able to calculate how much user must pay what they buy and system can give feedback if the payment less. the system can give changes.

### Story 1

As a user,

- I can add a product to cart (product have quantity) if product present in cart just add quantity,
- I can delete a product in my cart
- I can update quantity product in my cart
- I can see list product that I buy
  (product have property name and price)
  (product may have 1 different child product that we buy have property quantity)

### Story 2

oops the requirement changes for product :

- now we can divide our product to be cloths and food. cloths have size property and food have expire property
- when user see their cart list user can see size or expire in the list of product
- user still can buy product like usual.

### Story 3

Create System cli where user:

- able to add product to cart
- abel to see list product in cart

### Story 4

add feature to cli that can do calculation to what user buy, after that create input that user must fill with integer with some condition:

- tax 10% from total price will added to total price
- if not integer repeat the input
- if payment insufficient, create log that tell user , their payment is insufficient and repeat the input
- if payment over, create log that that tell user their chance money. and end the process. and say thankyou
- if even, end process and say thankyou
