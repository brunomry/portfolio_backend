import cors from "cors";
import "dotenv/config";
import express from "express";
import { fileURLToPath} from "url";
import path from "path";
import "./src/config/db.config.js";
import { constantes } from "./src/config/constantes.config.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "/public")));

try {
    app.listen(constantes.port, () => {
        console.log(`Servidor conectado en el puerto ${constantes.port}`);
    })
} catch (error) {
    console.error(error);
}