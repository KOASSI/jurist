document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Récupérer les valeurs du formulaire
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
  
    // Validation simple
    if (!name || !email || !phone || !message) {
      alert('Veuillez remplir tous les champs.');
      return;
    }
  
    // Simuler l'envoi du formulaire
    console.log('Formulaire soumis :', { name, email, phone, message });
    alert('Votre message a été envoyé avec succès !');
  
    // Réinitialiser le formulaire
    document.getElementById('contact-form').reset();
  });
  // server.mjs
import { createServer } from 'node:http';

const server = createServer((req, res) => {
res.writeHead(200, { 'Content-Type': 'text/plain' });
res.end('Hello World!\n');
});

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
console.log('Listening on 127.0.0.1:3000');
});

// run with `node server.mjs`
const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000; // Vous pouvez changer le port si nécessaire

// Middleware pour analyser les données du formulaire
app.use(bodyParser.urlencoded({ extended: true }));

// Remplacez cette URL par l'URL de votre instance MongoDB
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        console.log("Connecté à MongoDB");
        const database = client.db("nom_de_la_base_de_données");
        const collection = database.collection("contact_form");

        // Route pour traiter le formulaire
        app.post('/submit', async (req, res) => {
            const formData = {
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                message: req.body.message,
            };

            const result = await collection.insertOne(formData);
            res.send(`Message envoyé avec succès. ID : ${result.insertedId}`);
        });

    } catch (error) {
        console.error(error);
    }
}

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});

// Exécuter la fonction
run().catch(console.error);
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
