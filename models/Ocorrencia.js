// Importar o Mongoose para criar o schema
import mongoose from 'mongoose';

// Definir o schema (estrutura) da coleção Ocorrencias
const ocorrenciaSchema = new mongoose.Schema({
  
  // Número do processo - obrigatório e único
  numero_processo: {
    type: String,
    required: [true, 'Número de processo é obrigatório'],
    unique: true
  },
  
  // Data em que ocorreu o crime - obrigatória
  data_ocorrencia: {
    type: Date,
    required: true
  },
  
  // Tipo de crime - obrigatório
  tipo_crime: {
    type: String,
    required: true
  },
  
  // Descrição do modo de operação do crime
  modus_operandi: {
    type: String
  },
  
  // Array de indivíduos arguidos (pode haver vários suspeitos)
  arguidos_individuos: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Individuo' // Referência à coleção Individuos
  }],
  
  // Empresa arguida (opcional - nem sempre há empresa envolvida)
  arguida_empresa_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Empresa' // Referência à coleção Empresas
  },
  
  // Array de Relatos de Diligência Externa (RDE)
  relatos_diligencia: [{
    numero_rde: String, // Número identificador do RDE
    data_diligencia: Date, // Data em que a diligência foi realizada
    tipo_diligencia: String, // Ex: Vigilância, Busca, Apreensão, Interrogatório
    local: String, // Local onde foi realizada a diligência
    agente_responsavel: String, // Nome do agente/investigador responsável
    descricao: String, // Descrição detalhada do que foi feito e descoberto
    evidencias_recolhidas: String // Evidências ou provas recolhidas
  }],
  
  // Array de condenações (embebido aqui em vez de coleção separada)
  condenacoes: [{
    tribunal: String, // Nome do tribunal que julgou
    data_sentenca: Date, // Data da sentença
    pena_aplicada: String // Descrição da pena (ex: "2 anos de prisão efetiva")
  }]
  
}, {
  timestamps: true // Adiciona automaticamente createdAt e updatedAt
});

// Exportar o modelo para usar noutros ficheiros
export default mongoose.model('Ocorrencia', ocorrenciaSchema);