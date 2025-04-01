import Testimonio from "../models/testimonio.model"
import { formatoRespuesta } from "../utils/formatoRespuesta.util";

export const createTestimonio =async(req,res) => {
    try {
        const nuevoTestimonio = new Testimonio(req.body);

        await nuevoTestimonio.save();

        res.status(201).json(formatoRespuesta(true, "Nuevo testimonio creado", nuevoTestimonio, null))
    } catch (error) {
        console.error(error);
        return res.status(500).json(formatoRespuesta(false, "Error interno del servidor", null, {
            code: 500,
            details: error.message
        }))
    }
}

export const getTestimonios = async(req,res) => {
    try {
        const testimonios = await Testimonio.find();

        res.status(200).json(formatoRespuesta(true, "Lista de testimonios", [...testimonios], null))
    } catch (error) {
        console.error(error);
        res.status(404).json(false, "No se pudo obtener la lista de testimonios", null, {
            code: 404,
            details: error.message
        })
    }
}