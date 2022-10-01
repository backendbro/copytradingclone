const cloudinary = require('cloudinary');

cloudinary.v2.config({
  cloud_name: process.CLOUDINARY.NAME,
  api_key: process.CLOUDINARY.API_KEY,
  api_secret: process.CLOUDINARY.SECRET_KEY,
});

const uploadSingleFile = async (
  filePath,
  section = 'IMAGE',
  resourceType = 'auto',
) => {
  const result = await cloudinary.v2.uploader.upload(filePath, {
    folder: `COPY0-TRADING/${section}`,
    resourceType: `${resourceType}`,
  });
  return result;
};




module.exports = { uploadSingleFile, deleteFromCloud, deleteMultiple };
