// Importar o modelo Ocorrencia
import Ocorrencia from '../models/Ocorrencia.js';


// CREATE - Criar nova ocorrência

export const criarOcorrencia = async (req, res) => {
  try {
    const novaOcorrencia = await Ocorrencia.create(req.body);
    res.status(201).json({
      sucesso: true,
      mensagem: 'Ocorrência criada com sucesso',
      dados: novaOcorrencia
    });
  } catch (error) {
    res.status(400).json({
      sucesso: false,
      mensagem: error.message
    });
  }
};


// READ - Listar todas as ocorrências

export const listarOcorrencias = async (req, res) => {
  try {
    const ocorrencias = await Ocorrencia.find()
      .populate('arguidos_individuos', 'nome_principal documentos_id')
      .populate('arguida_empresa_id', 'nome_empresa nif_nipc');
    
    res.status(200).json({
      sucesso: true,
      quantidade: ocorrencias.length,
      dados: ocorrencias
    });
  } catch (error) {
    res.status(500).json({
      sucesso: false,
      mensagem: error.message
    });
  }
};


// READ - Obter uma ocorrência por ID

export const obterOcorrencia = async (req, res) => {
  try {
    const ocorrencia = await Ocorrencia.findById(req.params.id)
      .populate('arguidos_individuos')
      .populate('arguida_empresa_id');
    
    if (!ocorrencia) {
      return res.status(404).json({
        sucesso: false,
        mensagem: 'Ocorrência não encontrada'
      });
    }
    
    res.status(200).json({
      sucesso: true,
      dados: ocorrencia
    });
  } catch (error) {
    res.status(500).json({
      sucesso: false,
      mensagem: error.message
    });
  }
};


// UPDATE - Atualizar ocorrência

export const atualizarOcorrencia = async (req, res) => {
  try {
    const ocorrencia = await Ocorrencia.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    )
    .populate('arguidos_individuos')
    .populate('arguida_empresa_id');
    
    if (!ocorrencia) {
      return res.status(404).json({
        sucesso: false,
        mensagem: 'Ocorrência não encontrada'
      });
    }
    
    res.status(200).json({
      sucesso: true,
      mensagem: 'Ocorrência atualizada com sucesso',
      dados: ocorrencia
    });
  } catch (error) {
    res.status(400).json({
      sucesso: false,
      mensagem: error.message
    });
  }
};


// DELETE - Remover ocorrência

export const removerOcorrencia = async (req, res) => {
  try {
    const ocorrencia = await Ocorrencia.findByIdAndDelete(req.params.id);
    
    if (!ocorrencia) {
      return res.status(404).json({
        sucesso: false,
        mensagem: 'Ocorrência não encontrada'
      });
    }
    
    res.status(200).json({
      sucesso: true,
      mensagem: 'Ocorrência removida com sucesso'
    });
  } catch (error) {
    res.status(500).json({
      sucesso: false,
      mensagem: error.message
    });
  }
};
