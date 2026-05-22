// components/listing/ListingSection.jsx

function ListingSection({
  num,
  title,
  subtitle,
  children,
}) {
  return (
    <section
      className="
        mb-6 rounded-lg border border-stone-200
        bg-stone-50 p-8
      "
    >
      <div className="mb-8 flex gap-5">
        <div
          className="
            flex h-10 w-10 shrink-0 items-center
            justify-center rounded-full
            border border-orange-700
            text-lg italic text-orange-700
          "
        >
          {num}
        </div>

        <div className="flex-1">
          <h2
            className="
              text-3xl font-light tracking-tight
              text-stone-900
            "
          >
            {title}
          </h2>

          {subtitle && (
            <p
              className="
                mt-1 text-sm italic
                text-stone-500
              "
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-6">
        {children}
      </div>
    </section>
  );
}

export default ListingSection;