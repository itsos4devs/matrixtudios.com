/* eslint-disable import/no-anonymous-default-export */
// ../api/create-checout-session
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
  const { maid, email } = req.body;

  const transformedMaid = maid.map((item) => ({
    price_data: {
      currency: "aed",
      product_data: {
        name: item.name,
        images: [item.image],
        description: item.description,
      },
      unit_amount: 100 * 100,
    },
    quantity: 1,
    tax_rates: ["txr_1MSfdMEuz1yMNGtKd0osgiFF"],
  }));

  const session = await stripe.checkout.sessions.create({
    tax_id_collection: {
      enabled: true,
    },
    payment_method_types: ["card"],
    shipping_address_collection: {
      allowed_countries: ["AE"],
    },
    line_items: transformedMaid,
    mode: "payment",
    success_url: `${process.env.HOST}/success`,
    cancel_url: `${process.env.HOST}/profile/${maid[0].id}`,
    customer_email: email,
    metadata: {
      email: email,
      images: JSON.stringify(maid.map((item) => item.image)),
    },
  });
  res.status(200).json({ id: session.id });
};
