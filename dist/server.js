"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./config/db"));
const file_1 = __importDefault(require("./routes/file"));
const cloudinary_1 = require("cloudinary");
const app = (0, express_1.default)();
cloudinary_1.v2.config({
    cloud_name: process.env.CLOUDINARY_API_CLOUD,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});
dotenv_1.default.config();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({
    extended: true
}));
(0, db_1.default)();
app.use("/api/file", file_1.default);
app.get("/goode", (req, res) => {
    res.status(200).send("good");
});
app.listen(process.env.PORT, () => console.log(`server is listning to  PORT ${process.env.PORT}`));
