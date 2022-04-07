import express from "express";
import dotenv from "dotenv";
import mustache from "mustache-express";
import path from 'path';

import mainRoutes from './routes/index';

// Variáveis de Ambiente
dotenv.config();

// Express Server
const server = express();


// Engine MUSTACHE for VIEWS
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

// Public Folder
server.use(express.static(path.join(__dirname, '../public')));



// Routers
server.use(mainRoutes);

server.use((req, res)=>{
  res.send('Pagina não encontrada');
})


// Start Server
server.listen(process.env.PORT);
