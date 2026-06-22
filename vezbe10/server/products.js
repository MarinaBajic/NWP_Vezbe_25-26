var express = require('express')
var router = express.Router();

const products = [
  {
    id: 1,
    name: 'Ball',
    imageUrl: 'https://images.pexels.com/photos/27408124/pexels-photo-27408124.jpeg',
    price: 9.99,
    isOnSale: false,
    quantityInCart: 0
  },
  {
    id: 2,
    name: 'Elephant',
    imageUrl: 'https://images.unsplash.com/photo-1591946614720-90a587da4a36',
    price: 10.99,
    isOnSale: true,
    quantityInCart: 0
  },
  {
    id: 3,
    name: 'Mouse',
    imageUrl: 'https://images.unsplash.com/photo-1545249390-6bdfa286032f',
    price: 8.99,
    isOnSale: false,
    quantityInCart: 0
  }
];

router.get('/', (req, res) => {
  return res.status(200).json(products);
});

router.post('/', (req, res) => {
  let product = req.body;
  console.log(product);
  if (product.id) {
    return res.status(400)
        .json({msg: 'Product seems to already have an id assigned'});
  }
  product.id = products.length + 1;
  product.quantityInCart = 0;
  products.push(product);
  console.log(products);
  return res.status(200).json(product);
});

router.patch('/:id', (req, res) => {
  console.log("PATCH");
  let productId = req.params.id;
  const foundProduct = products.find((product) => product.id == productId);
  if (foundProduct) {
    let changeInQuantity = req.body.changeInQuantity;
    foundProduct.quantityInCart += changeInQuantity;
    console.log(products);
    return res.status(200).json({msg: 'Successfully updated cart'});
  }
  return res.status(400).json({msg: 'Product with id ' + productId + ' not found.'});
});

module.exports = router;