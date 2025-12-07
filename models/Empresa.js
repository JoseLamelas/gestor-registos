// Importar o Mongoose para criar o schema
import mongoose from 'mongoose';

// Definir o schema (estrutura) da coleção Empresas
const empresaSchema = new mongoose.Schema({
  
  // NIF/NIPC da empresa - obrigatório e único
  nif_nipc: {
    type: String,
    required: [true, 'NIF/NIPC é obrigatório'],
    unique: true
  },
  
  // Nome da empresa - obrigatório
  nome_empresa: {
    type: String,
    required: true
  },
  
  // País/jurisdição onde a empresa está registada - obrigatório
  jurisdicao_registo: {
    type: String,
    required: true
  },
  
  // Estado de atividade da empresa
  status_atividade: {
    type: String,
    enum: ['Ativa', 'Dissolvida'], // Apenas estes 2 valores são permitidos
    default: 'Ativa'
  },
  
  // Estatuto criminal da empresa
  estatuto_criminal: {
    type: String,
    enum: ['Nunca Arguida', 'Condenada'],
    default: 'Nunca Arguida'
  },
  
  // Array de sócios ligados à empresa
  socios_ligados: [{
    individuo_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Individuo' // Referência à coleção Individuos
    },
    percentagem: Number, // Percentagem de participação na empresa
    funcao: String // Cargo/função (ex: Administrador, Sócio Gerente)
  }]
  
}, {
  timestamps: true // Adiciona automaticamente createdAt e updatedAt
});

// Exportar o modelo para usar noutros ficheiros
export default mongoose.model('Empresa', empresaSchema);
