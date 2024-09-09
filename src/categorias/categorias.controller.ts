import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CategoriasService } from './categorias.service';
import { Categoria } from 'src/schemas/categorias.schema';

@Controller('categorias')
export class CategoriaController {
  constructor(private readonly categoriasService: CategoriasService) {}

  @Post()
  async crear(@Body() categoria: Categoria) {
    return this.categoriasService.crear(categoria);
  }

  @Get()
  async obtenerTodas() {
    return this.categoriasService.obtenerTodas();
  }

  @Get(':slug')
  async obtenerPorSlug(@Param('slug') slug: string) {
    return this.categoriasService.obtenerPorSlug(slug);
  }
}
