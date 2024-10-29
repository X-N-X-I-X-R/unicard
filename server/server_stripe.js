// create_price.js
const express = require('express');
const morgan = require('morgan'); // הוסף את morgan
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const app = express();
const port = 3000;

app.use(express.json());

// שימוש ב-morgan כדי לתעד בקשות HTTP
app.use(morgan('combined'));
app.post('/create-price', async (req, res) => {
  try {
    console.log('Received request to create price');
    
    const product = await stripe.products.create({
      name: 'Starter Subscription',
      description: '$12/Month subscription',
    });
    console.log('Product created:', product.id);

    const price = await stripe.prices.create({
      unit_amount: 1200,
      currency: 'usd',
      recurring: {
        interval: 'month',
      },
      product: product.id,
    });
    console.log('Price created:', price.id);

    res.json({
      success: true,
      productId: product.id,
      priceId: price.id,
    });
  } catch (error) {
    console.error('Error creating price:', error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});


