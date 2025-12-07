// Importar o modelo Utilizador
import Utilizador from '../models/Utilizador.js';

// CREATE - Criar novo utilizador

export const criarUtilizador = async (req, res) => {
  try {
    const novoUtilizador = await Utilizador.create(req.body);
    res.status(201).json({
      sucesso: true,
      mensagem: 'Utilizador criado com sucesso',
      dados: novoUtilizador
    });
  } catch (error) {
    res.status(400).json({
      sucesso: false,
      mensagem: error.message
    });
  }
};

// READ - Listar todos os utilizadores

export const listarUtilizadores = async (req, res) => {
  try {
    const utilizadores = await Utilizador.find().select('-password_hash'); // Não mostrar password
    res.status(200).json({
      sucesso: true,
      quantidade: utilizadores.length,
      dados: utilizadores
    });
  } catch (error) {
    res.status(500).json({
      sucesso: false,
      mensagem: error.message
    });
  }
};

// READ - Obter um utilizador por ID

export const obterUtilizador = async (req, res) => {
  try {
    const utilizador = await Utilizador.findById(req.params.id).select('-password_hash');
    
    if (!utilizador) {
      return res.status(404).json({
        sucesso: false,
        mensagem: 'Utilizador não encontrado'
      });
    }
    
    res.status(200).json({
      sucesso: true,
      dados: utilizador
    });
  } catch (error) {
    res.status(500).json({
      sucesso: false,
      mensagem: error.message
    });
  }
};

// UPDATE - Atualizar utilizador

export const atualizarUtilizador = async (req, res) => {
  try {
    const utilizador = await Utilizador.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true } // Retorna o documento atualizado e valida
    ).select('-password_hash');
    
    if (!utilizador) {
      return res.status(404).json({
        sucesso: false,
        mensagem: 'Utilizador não encontrado'
      });
    }
    
    res.status(200).json({
      sucesso: true,
      mensagem: 'Utilizador atualizado com sucesso',
      dados: utilizador
    });
  } catch (error) {
    res.status(400).json({
      sucesso: false,
      mensagem: error.message
    });
  }
};

// DELETE - Remover utilizador

export const removerUtilizador = async (req, res) => {
  try {
    const utilizador = await Utilizador.findByIdAndDelete(req.params.id);
    
    if (!utilizador) {
      return res.status(404).json({
        sucesso: false,
        mensagem: 'Utilizador não encontrado'
      });
    }
    
    res.status(200).json({
      sucesso: true,
      mensagem: 'Utilizador removido com sucesso'
    });
  } catch (error) {
    res.status(500).json({
      sucesso: false,
      mensagem: error.message
    });
  }
};
