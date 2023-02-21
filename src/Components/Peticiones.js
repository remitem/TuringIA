const express = require('express');
const app = express ();

app.use(express.json());


const usuarios = [
    {
      id: 1,
      apellido_paterno: "Morin",
      apellido_materno: "Aguilar",
      nombre: "Alexis",
      usuario: "AlexisM",
      password: "827ccb0eea8a706c4c34a16891f84e7b"
    },
    {
      id: 2,
      apellido_paterno: "Sanchez",
      apellido_materno: "Moreno",
      nombre: "Z",
      usuario: "Zsanchez",
      password: "099ebea48ea9666a7da2177267983138"
    }
  ];

const servicios = [
    {
      "id": 1,
      "servicio": "Linux",
      "descripcion": "Linux es un núcleo mayormente libre semejante al núcleo de Unix.​ Es uno de los principales ejemplos de software libre y de código abierto."
    },
    {
      "id": 2,
      "servicio": "Windows",
      "descripcion": "Explora la versatilidad del sistema operativo Windows de Microsoft"
    },
    {
      "id": 3,
      "servicio": "SCRUM",
      "descripcion": "Se suele pensar que scrum y la metodología ágil son lo mismo porque scrum se centra en la mejora continua, que es un principio básico de la metodología ágil."
    }
  ];


//Pagina Inicial
app.get('/', (req, res) => {
    res.send('Turing-IA API');
});

//Usuarios del login
app.get('/usuarios', (req, res) => {
  res.send('Usuarios Logeados');
});

app.get('/usuarios/:id', (req, res) => {
  const usuario = usuarios.find(c => c.id === parseInt(req.params.id));
  if (!usuarios) return res.status(404).send('Usuario no encontrado')
  else res.send(usuario);
});


app.post('/usuarios', (req, res) => {
  const usuario ={
    id: usuarios.length + 1,
    apellido_paterno: req.body.apellido_paterno,
    apellido_materno: req.body.apellido_materno, 
    nombre: req.body.nombre,
    usuario: req.body.usuario,
    password: req.body.password
  };

  usuarios.push(usuarios);
  res.send(usuario);
});


app.put('/usuarios', (req, res) => {
  res.send('PUT');
});


app.delete('/usuarios/:id', (req, res) => {
  const usuario = usuarios.find(c => c.id === parseInt(req.params.id));
  if (!usuarios) return res.status(404).send('Usuario no encontrado')
  
  const peticiones = usuarios.peticionesOf(usuario);
  usuarios.splice(peticiones, 1);
  res.send(usuario);
});



//Servicios Turing-IA
app.get('/servicios', (req, res) => {
  res.send('Turing-IA API');
});

app.get('/servicios/:id', (req, res) => {
  const servicio = servicios.find(c => c.id === parseInt(req.params.id));
  if (!servicios) return res.status(404).send('Servicio no encontrado')
  else res.send(servicio);
});

app.post('/servicios', (req, res) => {
  const servicio ={
    id: usuarios.length + 1,
    servico: req.body.servicio,
    descripcion: req.body.descripcion
  }

  servicios.push(servicios);
  res.send(servicio);
});

app.put('/', (req, res) => {
res.send('PUT');
});

app.delete('/servicios/:id', (req, res) => {
  const servicio = servicios.find(c => c.id === parseInt(req.params.id));
  if (!servicios) return res.status(404).send('Usuario no encontrado')
  
  const peticiones = servicios.peticionesOf(servicio);
  servicios.splice(peticiones, 1);
  res.send(servicio);
});



app.listen(3001, () => {
  console.log('Escuchando en puerto 3001');
});
