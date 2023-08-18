import { Request, Response } from 'express';
import { ContentSchema } from '../models/content.schema';
import { CategorySchema } from '../models/category.schema';
import { Category } from '../models/category.model';

// (Controlador de contenido) obtener la información del contenido principal
export const obtenerContenidoPrincipal =  (req: Request, res: Response) => {
  ContentSchema.find({type: 'serie'}).then(result => {
    res.send(result);
    res.end();
  }).catch(error => {
    res.send(error);
    res.end();
  }) ;
  
}
// (Controlador de contenido) obtener contenido de todas las categorias
export const obtenerContenidoPorCategoria = async (req: Request, res: Response) => {
  const categories:Category[] = await CategorySchema.aggregate(
    [
      {
        $lookup: {
          from: 'contents',
          localField: 'content',
          foreignField: '_id',
          as: 'contentDetails',
        },
      },
    ]
  );

  res.send(categories);
  res.end();
}
