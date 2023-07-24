"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const cloudinary_1 = require("cloudinary");
const File_ts_1 = __importDefault(require("../model/File.ts"));
const https_1 = __importDefault(require("https"));
const nodemailer_1 = __importDefault(require("nodemailer"));
const emailTemplate_ts_1 = __importDefault(require("../utils/emailTemplate.ts"));
const router = express_1.default.Router();
const storage = multer_1.default.diskStorage({});
const upload = (0, multer_1.default)({ storage });
router.post("/uploads", upload.single('myFile'), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.file)
            return res.status(400).send({ message: "Need the file" });
        console.log(req.file);
        let uploadedFile;
        try {
            uploadedFile = yield cloudinary_1.v2.uploader.upload(req.file.path, {
                folder: "mine",
                resource_type: "auto"
            });
        }
        catch (error) {
            console.log(error.message);
            return res.status(400).json({ message: error.message });
        }
        const { originalname } = req.file;
        // code that assigns a value to uploadedFile
        let Secure_Url = null;
        let Bytes = null;
        let Format = null;
        if (uploadedFile !== null) {
            const { secure_url, bytes, format } = uploadedFile;
            Secure_Url = secure_url;
            Bytes = bytes;
            Format = format;
        }
        else {
            // handle null case
            Secure_Url = null;
            Bytes = null;
            Format = null;
        }
        // save to database 
        const file = yield File_ts_1.default.create({
            filename: originalname,
            sizeInBytes: Bytes,
            secure_url: Secure_Url,
            format: Format
        });
        res.status(200).json({
            id: file._id,
            downloadPageLink: `${process.env.API_BASE_ENDPOINT_CLIENT}download/${file._id}`
        });
    }
    catch (error) {
        res.status(500).send({ message: "Server Error :(" });
    }
}));
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const file = yield File_ts_1.default.findById(id);
        if (!file) {
            return res.status(404).json({ message: "File does not exist" });
        }
        const { filename, format, sizeInBytes } = file;
        return res.status(200).json({
            name: filename,
            sizeInBytes,
            format,
            id
        });
    }
    catch (error) {
        return res.send(500).json({ "message": "Server error" });
    }
}));
router.get("/good", (req, res) => {
    res.send("good");
});
router.get("/:id/download", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const file = yield File_ts_1.default.findById(id);
        if (!file) {
            return res.status(404).json({ message: "file doesn't exist" });
        }
        https_1.default.get(file.secure_url, (fileStream) => fileStream.pipe(res));
    }
    catch (error) {
        res.send(500).json({ message: "server Error" });
    }
}));
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const file = yield File_ts_1.default.findById(id);
        if (!file) {
            return res.status(404).json({ message: "file doesn't exist" });
        }
    }
    catch (error) {
        res.send(500).json({ message: "server Error" });
    }
}));
router.post("/email", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, emailFrom, emailTo } = req.body;
    const file = yield File_ts_1.default.findById(id);
    if (!file) {
        return res.status(404).json({ message: "file doesn't exist" });
    }
    const transporter = nodemailer_1.default.createTransport({
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
        }
        else {
            console.log("Lets go babbyy");
        }
    });
    const { filename, sizeInBytes } = file;
    const fileSize = `${(Number(sizeInBytes) / (1024 * 1024)).toFixed(2)} MB`;
    const downloadPageLink = `${process.env.API_BASE_ENDPOINT_CLIENT}download/${file._id}`;
    const mailOptions = {
        from: emailFrom,
        to: emailTo,
        subject: "Hello , Here is your File",
        text: `${emailFrom} shared a file with you`,
        html: (0, emailTemplate_ts_1.default)(emailFrom, emailTo, downloadPageLink, filename, fileSize) // html body
    };
    // send mail using transporter
    transporter.sendMail(mailOptions, (error, info) => __awaiter(void 0, void 0, void 0, function* () {
        if (error) {
            console.log(error);
            return res.status(500).json({
                message: "Server Error (:"
            });
        }
        file.sender = emailFrom;
        file.receiver = emailTo;
        yield file.save();
        return res.status(200).json({
            message: "Email Sent"
        });
    }));
}));
exports.default = router;
