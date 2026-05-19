import ImageArray from "@/data/AboutImageLIst";
import { useState } from "react";

function AboutImages() {
  const [showImage, setShowImage] = useState(2);

  const handleImageShowInformation = (index) => {
    setShowImage(index);
  };

  console.log(showImage);

  return (
    <section className="bg-paper w-full h-auto flex flex-row gap-8 p-10 items-center justify-center max-md:flex-col">
      {ImageArray.map((image) => (
        <div
          className={`relative rounded-md w-100 h-120 drop-shadow-2xl overflow-hidden nth-2:h-140 transition-all duration-300 max-md:w-full max-md:h-100 ${
            image.id === showImage ? "grayscale-0" : "grayscale-100"
          } animate-fade animate-once animate-duration-${image.duration} animate-ease-in animate-delay-none`}
          key={image.id}
          onMouseOver={() => handleImageShowInformation(image.id)}
          onMouseOut={() => handleImageShowInformation(null)}
        >
          <img
            className="object-cover w-full h-full drop-shadow-2xl"
            src={image.image}
            alt={image.alt}
          />
          <div
            className={`absolute bottom-0 left-0 p-5 flex flex-col gap-3 text-paper transition-all duration-300 ${showImage === image.id ? "translate-y-0" : "translate-y-full"} bg-black/60`}
          >
            <h1 className="text-lg ">{image.title}</h1>
            <p>{image.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default AboutImages;
