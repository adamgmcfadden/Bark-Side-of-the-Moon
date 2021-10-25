const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Create Checkout Sessions from body params.
        const session = await stripe.checkout.sessions.create({
          customer_email: 'customer@example.com',
          submit_type: 'donate',
          billing_address_collection: 'auto',
          shipping_address_collection: {
            allowed_countries: ['US', 'CA'],
          },
          line_items: [
            {
              price: 'price_1JoF2AI4YZmdG6GENzRP19uO',
              quantity: 1,
            },
          ],
          payment_method_types: [
            'card',
            'acss_debit',
          ],
          mode: 'payment',
          success_url: `${req.headers.origin}/?success=true&session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${req.headers.origin}/?canceled=true`,
        });

      res.redirect(303, session.url);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
