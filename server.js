import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

import utilizadorRoutes from './routes/utilizadorRoutes.js'; 
import empresaRoutes from './routes/empresaRoutes.js';
import individuoRoutes from './routes/individuoRoutes.js';
import ocorrenciaRoutes from './routes/ocorrenciaRoutes.js';


//configuração
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

//conectar à base de dados
connectDB();

//middleware
app.use(express.json()); //para ler JSON no corpo das requisições
app.use(express.static('public')); //servir ficheiros estáticos da pasta 'public'

app.use('/api/utilizadores', utilizadorRoutes); //rotas de utilizadores
app.use('/api/empresas', empresaRoutes); //rotas de empresas
app.use('/api/individuos', individuoRoutes); //rotas de individuos
app.use('/api/ocorrencias', ocorrenciaRoutes);



//rota de teste
app.get('/', (req, res) => {
  res.send('API de Gestor de Registos Policiais a funcionar!');
});

//iniciar o servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor a correr na porta ${PORT}`);
});

