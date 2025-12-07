// Importar o Express para criar as rotas
import express from 'express';

// Importar as funções do controller
import {
  criarOcorrencia,
  listarOcorrencias,
  obterOcorrencia,
  atualizarOcorrencia,
  removerOcorrencia
} from '../controllers/ocorrenciaController.js';

// Criar o router
const router = express.Router();


// DEFINIR AS ROTAS CRUD


// CREATE - Criar nova ocorrência
// POST /api/ocorrencias
router.post('/', criarOcorrencia);

// READ - Listar todas as ocorrências
// GET /api/ocorrencias
router.get('/', listarOcorrencias);

// READ - Obter uma ocorrência específica por ID
// GET /api/ocorrencias/:id
router.get('/:id', obterOcorrencia);

// UPDATE - Atualizar ocorrência por ID
// PUT /api/ocorrencias/:id
router.put('/:id', atualizarOcorrencia);

// DELETE - Remover ocorrência por ID
// DELETE /api/ocorrencias/:id
router.delete('/:id', removerOcorrencia);

// Exportar o router
export default router;
