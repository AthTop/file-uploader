const cloudinary = require("cloudinary").v2;
const streamifier = require("streamifier");

const uploadHandler = (fileBuffer) => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        resource_type: "auto",
      },
      (error, result) => {
        if (error) {
          reject(error);
        }
        resolve(result);
      }
    );
    streamifier.createReadStream(fileBuffer).pipe(uploadStream);
  });
};

const destroyHandler = async (publicId) => {
  cloudinary.uploader.destroy(publicId).then((result) => {
    return result;
  });
} 

module.exports = { uploadHandler, destroyHandler };
