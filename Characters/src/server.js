const express = require("express");
const morgan = require("morgan");

const server = express();

server.use(express.json());
server.use(morgan("dev"));

server.use("/characters", require("./routes/index"));
server.use("*", (req, res) => res.status(404).send("Not found")); //para cualquier pagina que no tenga ruta

// ahora sobreescribimos el manejador de errores de express, 
// todos los errores si o si pasan por aca

server.use((err, req, res, next)=>{
    res.status(err.statusCode || 500).send({
        error: true,
        message: err.message,
    })
})

module.exports = server;
