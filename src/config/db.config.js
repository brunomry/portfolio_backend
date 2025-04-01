import mongoose from "mongoose";
import "dotenv/config";
import { constantes } from "./constantes.config.js";

mongoose.connect(constantes.dbUri);

const db = mongoose.connection;

db.once("open", () => {
    console.log("Base de datos conectada");
})