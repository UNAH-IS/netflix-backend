import express from 'express';
import { agregarContenidoContinue, obtenerContenidoContinue, obtenerContenidoMyList, obtenerPerfil } from '../controllers/profile.controller';

const router = express.Router();

// (Controlador de perfiles) obtener el detalle de un perfil en particular
router.get('/:id', obtenerPerfil);

// (Controlador de perfiles) agregar pelicula/contenido al arreglo continue del perfil seleccionado
// http://localhost:3001/profiles/:id/continue (PUT/POST)
router.put('/:id/continue', agregarContenidoContinue);

// (Controlador de perfiles) obtener contenido favorito (my list) (No sería muy necesario porque ya está en el detalle del perfil)
// http://localhost:3001/profiles/:id/mylist
router.get('/:id/mylist', obtenerContenidoMyList);

// (Controlador de perfiles) obtener contenido pendiente por ver (continue)(No sería muy necesario porque ya está en el detalle del perfil)
// http://localhost:3001/profiles/:id/continue
router.get('/:id/continue', obtenerContenidoContinue);

export default router;
