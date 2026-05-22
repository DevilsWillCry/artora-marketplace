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
        Nothing here yet
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
        Try another category or come back next
        month for new handcrafted pieces.
      </p>
    </div>
  );
}
 
export default EmptyState;