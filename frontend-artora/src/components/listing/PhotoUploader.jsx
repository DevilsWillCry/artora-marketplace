// components/listing/PhotoUploader.jsx

import PhotoSlot from "@/components/listing/PhotoSlot";
function PhotoUploader({
  photos,
  setPhotos,
}) {
  return (
    <div
      className="
        grid grid-cols-4 grid-rows-2 gap-3
      "
    >
      <PhotoSlot
        index={0}
        isPrimary
        photos={photos}
        setPhotos={setPhotos}
      />

      {[1, 2, 3, 4].map((index) => (
        <PhotoSlot
          key={index}
          index={index}
          photos={photos}
          setPhotos={setPhotos}
        />
      ))}
    </div>
  );
}

export default PhotoUploader