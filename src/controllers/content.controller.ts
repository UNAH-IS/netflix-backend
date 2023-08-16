import { Request, Response } from 'express';

// (Controlador de contenido) obtener la información del contenido principal
export const obtenerContenidoPrincipal = (req: Request, res: Response) => {
  res.send('Obtener el conntenido prinncipal');
  res.end();
}
// (Controlador de contenido) obtener contenido de todas las categorias
export const obtenerContenidoPorCategoria = (req: Request, res: Response) => {
  res.send('Obtener el conntenido por categorias');
  res.end();
}
