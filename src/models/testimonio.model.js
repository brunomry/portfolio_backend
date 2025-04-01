import mongoose from "mongoose";

const testimonioSchema = new mongoose.Schema({
  relacion: {
    type: String,
    required: true,
    trim: true,
  },
  usuario: {
    type: String,
    required: true,
    trim: true,
    unique: false,
    minLength: 7,
    maxLength: 35,
  },
  foto: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        const httpsregex = /^https:\/\/.+$/i;
        return httpsregex.test(value);
      },
      message: "La URL de la foto no es válida",
    },
  },
  comentario: {
    type: String,
    required: true,
    minLength: 25,
    maxLength: 500
},
 linkedin: {
    type: String, 
    required: false,
    validate: {
        validator: function (value){
            const linkedinregex = /^(https?:\/\/)www\.linkedin\.com\/in\/[a-zA-Z0-9\-]+$/i;
            return linkedinregex.test(value);
        }
    }
 },
});

const Testimonio = mongoose.model("testimonio", testimonioSchema);

export default Testimonio;