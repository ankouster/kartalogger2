app.post('/webhook', (req, res) => {
    const data = req.body;
    const userAgent = data.userAgent;
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log('IP del usuario:', ip);
    console.log('User Agent:', userAgent);
    res.status(200).send('Datos recibidos');
});