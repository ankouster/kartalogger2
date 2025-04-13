const express = require('express');
const app = express();
app.use(express.json());

app.post('/webhook', (req, res) => {
    const data = req.body;
    console.log('Datos recibidos:', data);
    res.status(200).send('Datos recibidos');
});

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});