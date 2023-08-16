import express from 'express';
import { login, obtenerUsuario, obtenerListaPerfiles } from '../controllers/user.controller';

const router = express.Router();

// (Controlador de usuarios) login
// http://localhost:3000/users/login
router.post('/login', login);

// (Controlador de usuarios) Obtener los detalles de un usuario, no sería muy necesario.
// http://localhost:3000/users/:id
router.get('/:id', obtenerUsuario);

// (Controlador de usuarios) obtener lista de perfiles de un usuario en particular
// http://localhost:3001/users/:id/profiles
router.get('/:id/profiles', obtenerListaPerfiles);

export default router;
