const express = require('express');
const app = express();

// Lista de superhéroes
const superheroes = [
    { id: 1, name: 'Superman', powers: ['Super fuerza', 'Vuela', 'vision rayos x'] },
    { id: 2, name: 'Batman', powers: ['Inteligencia', 'Artes marciales', 'Aparatos de ultima tecnologia'] },
    { id: 3, name: 'Mujer maravilla', powers: ['Super fuerza', 'vuela', 'Habilidad de combate', 'latigos'] },
    { id: 4, name: 'Flash', powers: ['Super velocidad', 'Time travel', 'transpasa objetos'] },
    { id: 5, name: 'Aquaman', powers: ['Respiracion bajo el agua', 'Telepathy with marine life', 'Super fuerza'] }
];

// ruta raiz
app.get('/', (req, res) => {
    res.send('Bienvenido Visita /api/superheroes para ver el listado 😎​.');
});

// Ruta que devuelve el listado de superhéroes
app.get('/api/superheroes', (req, res) => {
    res.json(superheroes);
});

// Ruta para obtener un superhéroe por su ID
app.get('/api/superheroes/:id', (req, res) => {
    const hero = superheroes.find(h => h.id === parseInt(req.params.id));
    if (!hero) {
        return res.status(404).send('Superhéroe no encontrado');
    }
    res.json(hero);
});



// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});