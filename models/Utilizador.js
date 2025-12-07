// Importar o Mongoose para criar o schema
import mongoose from 'mongoose';

// Definir o schema (estrutura) da coleção Utilizadores
const utilizadorSchema = new mongoose.Schema({
  
  // Username - obrigatório e único
  username: {
    type: String,
    required: [true, 'Username é obrigatório'],
    unique: true, // Não permite duplicados
    trim: true // Remove espaços em branco no início e fim
  },
  
  // Password encriptada - obrigatória
  password_hash: {
    type: String,
    required: [true, 'Password é obrigatória']
  },
  
  // Nível de permissão do utilizador - obrigatório
  permissao: {
    type: String,
    required: true,
    enum: ['admin', 'inserir', 'visualizar'], // Apenas estes 3 valores são permitidos
    default: 'visualizar' // Valor padrão se não for especificado
  },
  
  // Nome completo do utilizador - opcional
  nome_completo: {
    type: String,
    trim: true
  }
  
}, {
  timestamps: true // Adiciona automaticamente createdAt e updatedAt
});

// Exportar o modelo para usar noutros ficheiros
export default mongoose.model('Utilizador', utilizadorSchema);
