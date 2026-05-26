// src/components/shop/EmptyState.jsx

function EmptyState() {
  return (
    <div
      className="
        flex
        flex-col
        items-center
        justify-center
        py-28
        text-center
      "
    >
      <h2
        className="
          font-serif
          text-4xl
          text-stone-900
        "
      >
        Nada por aquí aún
      </h2>

      <p
        className="
          mt-4
          max-w-md
          font-serif
          italic
          text-stone-600
        "
      >
        Parece que no hay nada por aqui. Intenta buscar algo diferente.
      </p>
    </div>
  );
}

export default EmptyState;
