export const uploadCloudinary = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "artora_images");

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD}/image/upload`,
    {
      method: "POST",
      body: formData,
    },
  );
  const data = await res.json();

  if (data.error) {
    return {
      message: data.error.message,
      error: data.error,
    };
  }

  return data.secure_url;
};
