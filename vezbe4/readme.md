## Exercise 4 - Angular Components

You can find the implementation of the tasks in the directory `vezbe4/ecommerce`.

Setup instructions for installing and running Angular can be found in the file `vezbe4/angular_setup.md`.

In this exercise we will implement a simple e-commerce website and demonstrate the use of **components**, **data binding** (text interpolation and property binding), **event binding** and **pipes**.

### Pet Store Website

We are going to build a Pet Store website following these steps:

1. Make a new project called `pet-store`.
2. Create a component to display a single product.
3. The product component should display a name, price (use a pipe for currency), and image for the product.
You can initialize the component with some default values. Use any place‐holder image you want (the image should be stored as a url with a relative path to the image).
4. Highlight the entire element in a different color if the product is on sale. Whether the product is on sale can be an attribute of the product itself.
5. Add buttons to increase and decrease the quantity of the product in the cart. The quantity in the cart (this is related to product, so how much of each product is added to cart) should be visible in the UI. Disable the button for decrement if the quantity is already zero.
6. Organize the product data in a better way, by representing the product as a class and then use it in the component.


### How to run this project?

1. Clone this repository to your local machine.
2. Make sure you have followed all of the instructions in `vezbe4/angular_setup.md` to setup nvm, npm, node and angular cli.
3. Open a terminal and navigate to the root directory of the angular project (e.g. `vezbe4/ecommerce`).
4. Run `npm install` to install all dependencies.
5. If you encounter any vulnerabilities, run `npm audit fix` to fix them.
6. Run `ng serve` to start the server.
