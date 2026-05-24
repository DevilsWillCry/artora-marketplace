// components/listing/PhotoUploader.jsx

import PhotoSlot from "@/components/listing/PhotoSlot";
function PhotoUploader({ images, setImages }) {
  return (
    <div
      className="
        grid grid-cols-4 grid-rows-2 gap-3
      "
    >
      {images.map((item, index) => (
        <PhotoSlot
          key={index}
          index={index}
          images={images}
          image={item}
          setImages={setImages}
        />
      ))}
    </div>
  );
}

export default PhotoUploader;
