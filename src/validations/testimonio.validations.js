import { body } from "express-validator";

const testimonioValidaciones = [
  body("usuario")
    .notEmpty()
    .withMessage("El nombre es obligatorio")
    .isLength({ min: 7, max: 35 })
    .withMessage("El nombre debe contener entre 7 y 35 caracteres"),
  body("foto")
    .notEmpty()
    .withMessage("La foto es obligatoria")
    .matches(/^https:\/\/.+$/i)
    .withMessage("La imagen debe tener un formato de URL válida"),
  body("comentario")
    .notEmpty()
    .withMessage("El comentario es obligatorio")
    .isString()
    .withMessage("El comentario debe ser un string")
    .isLength({ min: 25, max: 500 })
    .withMessage("El comentario debe contener entre 25 y 500 caracteres"),
  body("linkedin")
    .isString()
    .withMessage("La URL debe ser un string")
    .matches(/^(https?:\/\/)www\.linkedin\.com\/in\/[a-zA-Z0-9\-]+$/i)
    .withMessage("La URL de linkedIn debe tener un formato de URL válida"),
];

export default testimonioValidaciones;
