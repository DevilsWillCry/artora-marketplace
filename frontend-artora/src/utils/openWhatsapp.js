// utils/whatsapp/openWhatsapp.js

export const openWhatsapp = ({ phone, message }) => {
  const cleanPhone = phone.replace(/\D/g, "");

  const whatsappURL = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
    message
  )}`;

  window.open(whatsappURL, "_blank");
};