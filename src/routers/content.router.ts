import express from 'express';
import { obtenerContenidoPorCategoria, obtenerContenidoPrincipal } from '../controllers/content.controller';

const router = express.Router();

// (Controlador de contenido) obtener la información del contenido principal
// http://localhost:3001/content/main-content
router.get('/main-content', obtenerContenidoPrincipal);

// (Controlador de contenido) obtener contenido de todas las categorias
// http://localhost:3001/content/by-category
router.get('/by-category', obtenerContenidoPorCategoria);


export default router;