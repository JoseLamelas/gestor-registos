// Importar o Express para criar as rotas
import express from 'express';

// Importar as funções do controller
import {
  criarEmpresa,
  listarEmpresas,
  obterEmpresa,
  atualizarEmpresa,
  removerEmpresa
} from '../controllers/empresaController.js';

// Criar o router
const router = express.Router();


// DEFINIR AS ROTAS CRUD
 
// CREATE - Criar nova empresa
// POST /api/empresas
router.post('/', criarEmpresa);

// READ - Listar todas as empresas
// GET /api/empresas
router.get('/', listarEmpresas);

// READ - Obter uma empresa específica por ID
// GET /api/empresas/:id
router.get('/:id', obterEmpresa);

// UPDATE - Atualizar empresa por ID
// PUT /api/empresas/:id
router.put('/:id', atualizarEmpresa);

// DELETE - Remover empresa por ID
// DELETE /api/empresas/:id
router.delete('/:id', removerEmpresa);

// Exportar o router
export default router;
