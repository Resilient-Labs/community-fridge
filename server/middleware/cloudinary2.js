// Importing Cloudinary
import { v2 as cloudinary2 } from "cloudinary"

// Configuring dotenv (if needed, see note below)
import dotenv from "dotenv"
dotenv.config({ path: "./.env" })

// Cloudinary configuration
cloudinary2.config({
  cloud_name: process.env.CLOUD_NAME2,
  api_key: process.env.API_KEY2,
  api_secret: process.env.API_SECRET2
})

// Exporting the configured cloudinary instance
export { cloudinary2 }