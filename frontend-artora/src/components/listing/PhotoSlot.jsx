function PhotoSlot({
  index,
  isPrimary = false,
  photos,
  setPhotos,
}) {
  const photo = photos[index];

  const handleFakeUpload = () => {
    const next = [...photos];

    next[index] = {
      id: crypto.randomUUID(),
      url: `https://picsum.photos/500/600?random=${index + 1}`,
    };

    setPhotos(next);
  };

  const removePhoto = (e) => {
    e.stopPropagation();

    const next = [...photos];
    next[index] = null;

    setPhotos(next);
  };

  return (
    <button
      type="button"
      onClick={handleFakeUpload}
      className={`
        relative overflow-hidden rounded-md border-2 border-dashed
        transition-all duration-200
        bg-stone-50 hover:bg-stone-100
        ${
          isPrimary
            ? "col-span-2 row-span-2"
            : ""
        }
        ${
          photo
            ? "border-stone-400"
            : "border-stone-300"
        }
      `}
    >
      {photo ? (
        <>
          <img
            src={photo.url}
            alt=""
            className="h-full w-full object-cover aspect-square"
          />

          {isPrimary && (
            <div
              className="
                absolute left-2 top-2
                rounded bg-black/80
                px-2 py-1
                text-[10px] uppercase tracking-widest
                text-white
              "
            >
              Cover
            </div>
          )}

          <button
            type="button"
            onClick={removePhoto}
            className="
              absolute right-2 top-2
              flex h-6 w-6 items-center justify-center
              rounded-full bg-white/90
              text-sm text-black
              shadow
              hover:bg-white
            "
          >
            ×
          </button>
        </>
      ) : (
        <div
          className="
            flex h-full min-h-[120px] flex-col
            items-center justify-center
            gap-2 p-4 text-stone-500
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={isPrimary ? "h-10 w-10" : "h-6 w-6"}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16l5-5 5 5 4-4 4 4M3 6h18"
            />
          </svg>

          <div className="text-center">
            <p className="text-xs uppercase tracking-widest">
              {isPrimary
                ? "Add cover photo"
                : "Add photo"}
            </p>

            {isPrimary && (
              <p className="mt-1 text-[11px] italic text-stone-400">
                JPG, PNG · 2400px+
              </p>
            )}
          </div>
        </div>
      )}
    </button>
  );
}

export default PhotoSlot;