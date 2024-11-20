import { CloudinaryStorage } from 'multer-storage-cloudinary';
import { v2 as cloudinary } from 'cloudinary';

export const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    return {
      folder: 'ecommerce',
      format: async () => ['jpeg', 'png', 'jpg'],
      public_id: file.originalname.split('.')[0],
    };
  },
});
