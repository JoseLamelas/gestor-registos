import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

//configuração
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

//conectar à base de dados
connectDB();

//middleware
app.use(express.json()); //para ler JSON no corpo das requisições
app.use(express.static('public')); //servir ficheiros estáticos da pasta 'public'

//rota de teste
app.get('/', (req, res) => {
  res.send('API de Gestor de Registos Policiais a funcionar!');
});

//iniciar o servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor a correr na porta ${PORT}`);
});

