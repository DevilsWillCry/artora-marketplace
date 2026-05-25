import { useRef } from "react";

function PhotoSlot({ index, isPrimary = false, images, image, setImages }) {
  const primary = index === 0 || isPrimary;

  const inputRef = useRef(null);

  const handleUpload = (e) => {
    e.stopPropagation();

    const file = e.target.files?.[0];
    if (!file) return;

    const localUrl = URL.createObjectURL(file);

    const uploadFile = [...images];
    uploadFile[index] = {
      id: crypto.randomUUID(),
      file,
      url: localUrl,
    };
    setImages(uploadFile);
  };

  const removePhoto = (e) => {
    e.stopPropagation();
    if (image?.url) URL.revokeObjectURL(image.url);
    const removeFile = [...images];
    removeFile[index] = null;
    setImages(removeFile);
  };

  return (
    <>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        hidden
        onChange={handleUpload}
      />

      <div
        onClick={() => inputRef.current?.click()}
        className={`
      relative overflow-hidden rounded-md border-2 border-dashed
      transition-all duration-200
      bg-stone-50 hover:bg-stone-100
      cursor-pointer
      ${primary ? "col-span-2 row-span-2" : ""}
      ${image ? "border-stone-400" : "border-stone-300"}
    `}
      >
        {image ? (
          <>
            <img
              src={image.url}
              alt=""
              className="h-full w-full object-cover aspect-square"
            />

            {primary && (
              <div
                className="
              absolute left-2 top-2
              rounded bg-black/80
              px-2 py-1
              text-[10px] uppercase tracking-widest
              text-white
            "
              >
                Portada
              </div>
            )}

            <span
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
            </span>
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
              className={primary ? "h-10 w-10" : "h-6 w-6"}
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
                {primary ? "Añadir foto de portada" : "Añadir foto"}
              </p>

              {primary && (
                <p className="mt-1 text-[11px] italic text-stone-400">
                  JPG, PNG · 2400px+
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default PhotoSlot;
