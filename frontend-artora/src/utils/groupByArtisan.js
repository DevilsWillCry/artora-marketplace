// utils/whatsapp.js

export const groupProductsByArtisan = ({ items, products, users }) => {
  const itemsToSendWhatsapp = items.map((item) => {
    const product = products.find((p) => p.id === item.productId);

    const artisan = users.find((user) => user.id === product.artisanId);

    return {
      ...item,
      artisanId: product.artisanId,
      phone: `${artisan.phoneCode}${artisan.phone}`,
      name: product.title,
    };
  });

  return itemsToSendWhatsapp.reduce((acc, product) => {
    const artisanId = product.artisanId;

    if (!acc[artisanId]) {
      acc[artisanId] = {
        artisanId,
        phone: product.phone.replace("+", ""),
        products: [],
        total: 0,
      };
    }

    acc[artisanId].products.push(product);

    acc[artisanId].total += product.price * product.quantity;

    return acc;
  }, {});
};
