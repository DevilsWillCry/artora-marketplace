// src/components/cart/CartFooter.jsx

export default function CartFooter({ total, onSubmit }) {
  return (
    <footer
      className="
        border-t border-stone-200
        bg-[#efe7db]
        px-5 py-5

        md:px-6
      "
    >
      <div
        className="
          flex items-center justify-between
          text-sm text-stone-600
        "
      >
        <span>Subtotal</span>

        <span>
          $
          {total.toLocaleString("es-CO")}
        </span>
      </div>

      <div
        className="
          mt-3
          flex items-center justify-between
          text-sm text-stone-500
        "
      >
        <span>Envío</span>

        <span>Calculado al finalizar la compra</span>
      </div>

      <button
        type="submit"
        onClick={onSubmit}
        className="
          mt-5 w-full
          rounded-md
          bg-stone-900
          px-5 py-4
          text-sm font-medium uppercase
          tracking-[0.18em]
          text-white
          transition-opacity

          hover:opacity-90
        "
      >
        Pagar · 
        ${total.toLocaleString({ style: "currency", currency: "COP"})} COP
      </button>
    </footer>
  );
}