// components/listing/PhotoUploader.jsx

import PhotoSlot from "@/components/listing/PhotoSlot";
function PhotoUploader({ photos, setPhotos }) {
  return (
    <div
      className="
        grid grid-cols-4 grid-rows-2 gap-3
      "
    >
      {photos.map((item, index) => (
        <PhotoSlot
          key={index}
          index={index}
          photos={photos}
          photo={photos[index]}
          setPhotos={setPhotos}
        />
      ))}
    </div>
  );
}

export default PhotoUploader;
