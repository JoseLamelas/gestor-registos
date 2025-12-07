// Importar o Mongoose para criar o schema
import mongoose from 'mongoose';

// Definir o schema (estrutura) da coleção Individuos
const individuoSchema = new mongoose.Schema({
  
  // Nome principal do indivíduo - obrigatório
  nome_principal: {
    type: String,
    required: [true, 'Nome principal é obrigatório'],
    trim: true
  },
  
  // Data de nascimento - obrigatória
  data_nascimento: {
    type: Date,
    required: [true, 'Data de nascimento é obrigatória']
  },
  
  // Array de documentos de identificação (pode ter múltiplos)
  documentos_id: [{
    tipo: {
      type: String,
      enum: ['CC/BI', 'Passaporte', 'NIF_Estrangeiro']
    },
    numero: String,
    pais: String // País emissor do documento
  }],
  
  // Array de nomes alternativos/aliases
  outras_grafias: [String],
  
  // Array de moradas históricas
  moradas_historicas: [{
    morada: String,
    pais: String,
    status: {
      type: String,
      enum: ['Atual', 'Antiga', 'Fiscal']
    }
  }],
  
  // Array de contactos
  contactos: [{
    tipo: {
      type: String,
      enum: ['Telemóvel', 'Email', 'Rede_Social']
    },
    valor: String // Número de telemóvel, email ou username de rede social
  }],
  
  // Array de veículos associados
  veiculos: [{
    matricula: String,
    vin: String, // Número de identificação do veículo
    tipo_ligacao: String // Ex: Proprietário, Condutor habitual
  }],
  
  // Array de contas bancárias (embebido aqui em vez de coleção separada)
  contas_bancarias: [{
    iban: String,
    nome_banco: String,
    pais_jurisdicao: String, // País onde a conta está
    data_abertura: Date,
    data_encerramento: Date,
    status: {
      type: String,
      enum: ['Ativa', 'Encerrada', 'Bloqueada'],
      default: 'Ativa'
    }
  }],
  
  // Array de media - PERMITE MÚLTIPLAS FOTOGRAFIAS E DOCUMENTOS
  media: [{
    tipo: {
      type: String,
      enum: ['Foto', 'Documento'] // Distingue entre fotos de perfil e documentos digitalizados
    },
    caminho_ficheiro: String, // URL ou caminho do ficheiro
    descricao: String // Opcional: descrição da foto (ex: "Foto de perfil 2023", "Foto de vigilância")
  }],
  
  // Características físicas - opcional
  caracteristicas_fisicas: String // Ex: Tatuagens, cicatrizes, altura, etc.
  
}, {
  timestamps: true // Adiciona automaticamente createdAt e updatedAt
});

// Exportar o modelo para usar noutros ficheiros
export default mongoose.model('Individuo', individuoSchema);