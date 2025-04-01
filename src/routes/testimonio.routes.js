import { Router } from "express";
import { createTestimonio, getTestimonios } from "../controllers/testimonios.controller";
import resultadoValidacion from "../middlewares/resultadoValidacion.middlewares";
import testimonioValidaciones from "../validations/testimonio.validations";

const routerTestimonio = Router();

routerTestimonio.route("/create").post([testimonioValidaciones,resultadoValidacion],createTestimonio);
routerTestimonio.route("/testimonios").get(getTestimonios);