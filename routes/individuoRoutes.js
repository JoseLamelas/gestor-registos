// Importar o Express para criar as rotas
import express from 'express';

// Importar as funções do controller
import {
  criarIndividuo,
  listarIndividuos,
  obterIndividuo,
  atualizarIndividuo,
  removerIndividuo
} from '../controllers/individuoController.js';

// Criar o router
const router = express.Router();

// ========================================
// DEFINIR AS ROTAS CRUD
// ========================================

// CREATE - Criar novo indivíduo
// POST /api/individuos
router.post('/', criarIndividuo);

// READ - Listar todos os indivíduos
// GET /api/individuos
router.get('/', listarIndividuos);

// READ - Obter um indivíduo específico por ID
// GET /api/individuos/:id
router.get('/:id', obterIndividuo);

// UPDATE - Atualizar indivíduo por ID
// PUT /api/individuos/:id
router.put('/:id', atualizarIndividuo);

// DELETE - Remover indivíduo por ID
// DELETE /api/individuos/:id
router.delete('/:id', removerIndividuo);

// Exportar o router
export default router;
