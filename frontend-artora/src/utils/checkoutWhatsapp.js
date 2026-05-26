// utils/whatsapp/checkoutWhatsapp.js

import { createWhatsappMessage } from "./createWhatsappMessage";
import { openWhatsapp } from "./openWhatsapp";

export const checkoutWhatsapp = (groupedByArtisan) => {
  Object.values(groupedByArtisan).forEach((artisan) => {
    const message = createWhatsappMessage(artisan);

    openWhatsapp({
      phone: artisan.phone,
      message,
    });
  });
};