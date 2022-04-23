const multer = require('multer');

const cloudinary = require('cloudinary');
const multerStorageCloudinary = require('multer-storage-cloudinary');

// If we have set the CLOUDINARY_URL env variable on our project
// this requires no further configuration
const storage = new multerStorageCloudinary.CloudinaryStorage({
  cloudinary: cloudinary.v2
});

// only keeps the binary here iin the dist folder
// const upload = multer({ dest: 'dist/' });

// keeps the file in cloudinary storage
const upload = multer({ storage });

module.exports = upload;
// upload is an object (the image or whatever file we upload)
