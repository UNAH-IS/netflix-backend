import { Request, Response } from 'express';


// (Controlador de perfiles) obtener el detalle de un perfil en particular
export const obtenerPerfil = (req: Request, res: Response) => {
  res.send("Obtener el perfil con id " + req.params.id);
  res.end();
}

// (Controlador de perfiles) agregar pelicula al arreglo continue del perfil seleccionado
export const agregarContenidoContinue = (req: Request, res: Response) => {
  res.send("Agregar nuevo contenido a continue para el perfil " + req.params.id);
  res.end();
}
// (Controlador de perfiles) obtener contenido favorito (my list) (No sería muy necesario porque ya está en el detalle del perfil)
export const obtenerContenidoMyList = (req: Request, res: Response) => {
  res.send("Obtener el contenido de myList para el perfil " + req.params.id);
  res.end();
}

// (Controlador de perfiles) obtener contenido pendiente por ver (continue)(No sería muy necesario porque ya está en el detalle del perfil)
export const obtenerContenidoContinue = (req: Request, res: Response) => {
  res.send("Obtener el contenido de Continue para el perfil " + req.params.id);
  res.end();
}