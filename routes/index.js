const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/pacienteControllers');

module.exports = function() {


    //Agrega nuevos pacientes via POST
    router.post('/pacientes',
        pacienteController.nuevoCliente

    );

    //obtiene todos los registros de pacientes en la BD
    router.get('/pacientes',
        pacienteController.obtenerPacientes
    );

    //obtiene pacientes por ID
    router.get('/pacientes/:id',
        pacienteController.obtenerPaciente
    );

    //actualizar un registro por ID
    router.put('/pacientes/:id',
        pacienteController.actualizarPaciente
    );

    //elimina paciente por ID
    router.delete('/pacientes/:id',
        pacienteController.eliminaPaciente
    );

    return router;
}