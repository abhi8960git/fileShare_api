import express from 'express';
import multer from 'multer';
import { v2 as cloudinary, UploadApiResponse } from 'cloudinary';
import File from '../model/File.ts';
import https from 'https'
import nodemailer from 'nodemailer'
import createEmailTemplate from '../utils/emailTemplate.ts';
import dotenv from 'dotenv'


const router = express.Router();

const storage = multer.diskStorage({});
const upload = multer({ storage });

router.post("/uploads", upload.single('myFile'), async (req, res) => {
    try {
        if (!req.file)
            return res.status(400).send({ message: "Need the file" })

        console.log(req.file);

        let uploadedFile: UploadApiResponse;
        try {
            uploadedFile = await cloudinary.uploader.upload(req.file.path, {
                folder: "mine",
                resource_type: "auto"
            })
        } catch (error: any) {
            console.log(error.message);
            return res.status(400).json({ message: error.message });

        }


        const { originalname } = req.file;



        // code that assigns a value to uploadedFile

        let Secure_Url: string | null = null;
        let Bytes: number | null = null;
        let Format: string | null = null;

        if (uploadedFile !== null) {
            const { secure_url, bytes, format } = uploadedFile;
            Secure_Url = secure_url;
            Bytes = bytes;
            Format = format;


        } else {
            // handle null case
            Secure_Url = null;
            Bytes = null;
            Format = null;

        }
        // save to database 
        const file = await File.create({
            filename: originalname,
            sizeInBytes: Bytes,
            secure_url: Secure_Url,
            format: Format
        })
        res.status(200).json({
            id: file._id,
            downloadPageLink: `${process.env.API_BASE_ENDPOINT_CLIENT}download/${file._id}`
        });

    } catch (error) {
        res.status(500).send({ message: "Server Error :(" })
    }
})


router.get("/:id", async (req, res) => {
    try {

        const id = req.params.id;
        const file = await File.findById(id);

        if (!file) {
            return res.status(404).json({ message: "File does not exist" })
        }

        const { filename, format, sizeInBytes } = file;
        return res.status(200).json({
            name: filename,
            sizeInBytes,
            format,
            id
        })

    } catch (error) {
        return res.send(500).json({ "message": "Server error" })
    }
})

router.get("/good", (req, res) => {
    res.send("good")
})

router.get("/:id/download", async (req, res) => {
    try {
        const id = req.params.id
        const file = await File.findById(id)
        if (!file) {
            return res.status(404).json({ message: "file doesn't exist" });
        }

        https.get(file.secure_url, (fileStream) => fileStream.pipe(res))
    } catch (error) {

        res.send(500).json({ message: "server Error" })

    }
})


router.get("/:id", async (req, res) => {
    try {
        const id = req.params.id
        const file = await File.findById(id)
        if (!file) {
            return res.status(404).json({ message: "file doesn't exist" });
        }


    } catch (error) {

        res.send(500).json({ message: "server Error" })

    }
})



router.post("/email", async (req, res) => {
    const { id, emailFrom, emailTo } = req.body
    const file = await File.findById(id)
    if (!file) {
        return res.status(404).json({ message: "file doesn't exist" });
    }

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.GMAIL_MAIL,
          pass: process.env.GMAIL_PASSWORD,
        },
        port: 465,
        host: "smtp.gmail.com",
      });
      
      transporter.verify((error, success) => {
        if (error) {
          console.log(error);
        } else {
          console.log("Lets go babbyy");
        }
      });


    const { filename, sizeInBytes } = file
    const fileSize = `${(Number(sizeInBytes) / (1024 * 1024)).toFixed(2)} MB`
    const downloadPageLink = `${process.env.API_BASE_ENDPOINT_CLIENT}download/${file._id}`

    const mailOptions={
        from: emailFrom, // sender address
        to: emailTo, // list of receivers
        subject: "Hello , Here is your File", // Subject line
        text: `${emailFrom} shared a file with you`, // plain text body
        html: createEmailTemplate(emailFrom,emailTo, downloadPageLink, filename, fileSize) // html body
    }

    // send mail using transporter
    transporter.sendMail(mailOptions, async(error, info)=>{
        if(error) {
            console.log(error)
            return res.status(500).json({
                message:"Server Error (:"
            })
        }

        file.sender = emailFrom
        file.receiver= emailTo;

        await file.save()

        return res.status(200).json({
            message:"Email Sent"
        })
    })

})



export default router;
