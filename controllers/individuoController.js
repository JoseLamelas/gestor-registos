// Importar o modelo Individuo
import Individuo from '../models/Individuo.js';


// CREATE - Criar novo indivíduo

export const criarIndividuo = async (req, res) => {
  try {
    const novoIndividuo = await Individuo.create(req.body);
    res.status(201).json({
      sucesso: true,
      mensagem: 'Indivíduo criado com sucesso',
      dados: novoIndividuo
    });
  } catch (error) {
    res.status(400).json({
      sucesso: false,
      mensagem: error.message
    });
  }
};


// READ - Listar todos os indivíduos

export const listarIndividuos = async (req, res) => {
  try {
    const individuos = await Individuo.find();
    res.status(200).json({
      sucesso: true,
      quantidade: individuos.length,
      dados: individuos
    });
  } catch (error) {
    res.status(500).json({
      sucesso: false,
      mensagem: error.message
    });
  }
};


// READ - Obter um indivíduo por ID

export const obterIndividuo = async (req, res) => {
  try {
    const individuo = await Individuo.findById(req.params.id);
    
    if (!individuo) {
      return res.status(404).json({
        sucesso: false,
        mensagem: 'Indivíduo não encontrado'
      });
    }
    
    res.status(200).json({
      sucesso: true,
      dados: individuo
    });
  } catch (error) {
    res.status(500).json({
      sucesso: false,
      mensagem: error.message
    });
  }
};

// UPDATE - Atualizar indivíduo

export const atualizarIndividuo = async (req, res) => {
  try {
    const individuo = await Individuo.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!individuo) {
      return res.status(404).json({
        sucesso: false,
        mensagem: 'Indivíduo não encontrado'
      });
    }
    
    res.status(200).json({
      sucesso: true,
      mensagem: 'Indivíduo atualizado com sucesso',
      dados: individuo
    });
  } catch (error) {
    res.status(400).json({
      sucesso: false,
      mensagem: error.message
    });
  }
};


// DELETE - Remover indivíduo

export const removerIndividuo = async (req, res) => {
  try {
    const individuo = await Individuo.findByIdAndDelete(req.params.id);
    
    if (!individuo) {
      return res.status(404).json({
        sucesso: false,
        mensagem: 'Indivíduo não encontrado'
      });
    }
    
    res.status(200).json({
      sucesso: true,
      mensagem: 'Indivíduo removido com sucesso'
    });
  } catch (error) {
    res.status(500).json({
      sucesso: false,
      mensagem: error.message
    });
  }
};