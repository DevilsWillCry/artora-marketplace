// utils/whatsapp/createMessage.js

export const createWhatsappMessage = (artisan) => {
  const lines = artisan.products.map((product) => {
    return `• ${product.name} x${product.quantity} - $${
      product.price * product.quantity
    }`;
  });

  return `
Hola, quiero comprar estos productos:

${lines.join("\n")}

Total: $${artisan.total.toLocaleString()}
`;
};