// components/listing/ListingField.jsx

function CartField({
  label,
  hint,
  error,
  required,
  children,
}) {
  return (
    <div>
      <div className="mb-2">
        <label
          className={`
            text-[11px] font-semibold uppercase
            tracking-[0.18em]
            ${
              error
                ? "text-red-700"
                : "text-stone-600"
            }
          `}
        >
          {label}
          {required && (
            <span className="ml-1 text-red-700">
              *
            </span>
          )}
        </label>

        {hint && (
          <p
            className="
              mt-1 text-xs italic
              text-stone-400
            "
          >
            {hint}
          </p>
        )}
      </div>

      {children}

      {error && (
        <p
          className="
            mt-2 text-xs italic
            text-red-700
          "
        >
          — {error}
        </p>
      )}
    </div>
  );
}

export default CartField;