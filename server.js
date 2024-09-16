const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Configuración de CORS
app.use(cors({
  origin: 'https://flats-up.com' // Reemplaza con el dominio permitido
}));

// Middleware para procesar JSON
app.use(bodyParser.json());

// Configura el transporter para enviar correos (usando tu proveedor de correo)
const transporter = nodemailer.createTransport({
  service: 'gmail', // Cambia esto si usas otro servicio
  auth: {
    user: process.env.user, // Reemplaza con tu correo
    pass: process.env.pass // Reemplaza con tu contraseña
  }
});

// Ruta para manejar el envío de correos
app.post('/sendmail', (req, res) => {
  const { name, email, subject, iam } = req.body;

  const mailOptions = {
    from: email, // Dirección del remitente
    to: process.env.to, // Dirección de destino
    subject: `Nuevo mensaje de ${name}`,
    text: `Nombre: ${name}, Email: ${email}, Telefono: ${subject}, ${iam}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send({ error: 'Error sending email' });
    }
    res.status(200).send({ status: 'Email sent!' });
  });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

