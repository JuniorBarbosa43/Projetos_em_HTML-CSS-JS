const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../public')));

let appointments = require('./agendamentos.json');

app.get('/appointments', (req, res) => {
  res.json(appointments);
});

app.post('/appointments', (req, res) => {
    const { name, service, date } = req.body;

    if (!name || !service || !date) {
        return res.status(400).send('Todos os campos são obrigatórios');
    }

    const newAppointment = { name, service, date };
    appointments.push(newAppointment);

    fs.writeFile('./agendamentos.json', JSON.stringify(appointments, null, 2), (err) => {
        if (err) {
            console.error('Erro ao salvar agendamento:', err);
            return res.status(500).send('Erro ao salvar agendamento');
        }
        res.status(200).send('Agendamento realizado com sucesso!');
    });
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public", "index.html"));
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
