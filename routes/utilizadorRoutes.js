// Importar o Express para criar as rotas
import express from 'express';

// Importar as funções do controller
import {
  criarUtilizador,
  listarUtilizadores,
  obterUtilizador,
  atualizarUtilizador,
  removerUtilizador
} from '../controllers/utilizadorController.js';

// Criar o router
const router = express.Router();

// ========================================
// DEFINIR AS ROTAS CRUD
// ========================================

// CREATE - Criar novo utilizador
// POST /api/utilizadores
router.post('/', criarUtilizador);

// READ - Listar todos os utilizadores
// GET /api/utilizadores
router.get('/', listarUtilizadores);

// READ - Obter um utilizador específico por ID
// GET /api/utilizadores/:id
router.get('/:id', obterUtilizador);

// UPDATE - Atualizar utilizador por ID
// PUT /api/utilizadores/:id
router.put('/:id', atualizarUtilizador);

// DELETE - Remover utilizador por ID
// DELETE /api/utilizadores/:id
router.delete('/:id', removerUtilizador);

// Exportar o router
export default router;
