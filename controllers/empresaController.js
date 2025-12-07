// Importar o modelo Empresa
import Empresa from '../models/Empresa.js';

// CREATE - Criar nova empresa

export const criarEmpresa = async (req, res) => {
  try {
    const novaEmpresa = await Empresa.create(req.body);
    res.status(201).json({
      sucesso: true,
      mensagem: 'Empresa criada com sucesso',
      dados: novaEmpresa
    });
  } catch (error) {
    res.status(400).json({
      sucesso: false,
      mensagem: error.message
    });
  }
};


// READ - Listar todas as empresas

export const listarEmpresas = async (req, res) => {
  try {
    const empresas = await Empresa.find();
    res.status(200).json({
      sucesso: true,
      quantidade: empresas.length,
      dados: empresas
    });
  } catch (error) {
    res.status(500).json({
      sucesso: false,
      mensagem: error.message
    });
  }
};

// READ - Obter uma empresa por ID

export const obterEmpresa = async (req, res) => {
  try {
    const empresa = await Empresa.findById(req.params.id);
    
    if (!empresa) {
      return res.status(404).json({
        sucesso: false,
        mensagem: 'Empresa não encontrada'
      });
    }
    
    res.status(200).json({
      sucesso: true,
      dados: empresa
    });
  } catch (error) {
    res.status(500).json({
      sucesso: false,
      mensagem: error.message
    });
  }
};

// UPDATE - Atualizar empresa

export const atualizarEmpresa = async (req, res) => {
  try {
    const empresa = await Empresa.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!empresa) {
      return res.status(404).json({
        sucesso: false,
        mensagem: 'Empresa não encontrada'
      });
    }
    
    res.status(200).json({
      sucesso: true,
      mensagem: 'Empresa atualizada com sucesso',
      dados: empresa
    });
  } catch (error) {
    res.status(400).json({
      sucesso: false,
      mensagem: error.message
    });
  }
};

// DELETE - Remover empresa

export const removerEmpresa = async (req, res) => {
  try {
    const empresa = await Empresa.findByIdAndDelete(req.params.id);
    
    if (!empresa) {
      return res.status(404).json({
        sucesso: false,
        mensagem: 'Empresa não encontrada'
      });
    }
    
    res.status(200).json({
      sucesso: true,
      mensagem: 'Empresa removida com sucesso'
    });
  } catch (error) {
    res.status(500).json({
      sucesso: false,
      mensagem: error.message
    });
  }
};
