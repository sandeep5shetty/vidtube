import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();

//configure cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        const resposnse = await cloudinary.uploader.upload(localFilePath, {
            resource_type: 'auto', // Automatically detect the resource type
        });
        console.log("File Upload successful:", resposnse.url);
        fs.unlinkSync(localFilePath); // Delete the local file after upload
        return resposnse;
        
    } catch (error) {
        console.log("Error while uploading file on cloudinary", error);
        fs.unlinkSync(localFilePath); // Delete the local file if upload fails
        console.error('Error uploading to Cloudinary:', error);
        return null; 
    }
}

const deleteFromCloudinary = async (publicId) => {
    try {
        await cloudinary.uploader.destroy(publicId);
        console.log("File deleteFromCloudinaryd successfully", publicId);
    }catch(error) {
        console.log("Error while deleting file from cloudinary", error);
        return null;
    }
}

export { uploadOnCloudinary, deleteFromCloudinary };