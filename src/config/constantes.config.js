import "dotenv/config";

export const constantes = {
    port: process.env.PORT || 3000,
    dbUri: process.env.DB_URI
}