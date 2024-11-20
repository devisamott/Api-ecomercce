import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductoService } from './productos.service';
import { Producto } from 'src/schemas/productos.schema';

@Controller('productos')
export class ProductosController {
  constructor(private readonly productoService: ProductoService) {}

  @Post()
  async crear(@Body() producto: Producto) {
    return this.productoService.crear(producto);
  }

  @Get('descuento')
  async obtenerEnDescuento(): Promise<Producto[]> {
    return this.productoService.obtenerEnDescuento();
  }

  @Get()
  async obtenerTodas() {
    return this.productoService.obtenerTodas();
  }

  @Get(':slug')
  async obtenerPorSlug(@Param('slug') slug: string): Promise<Producto> {
    return this.productoService.obtenerPorSlug(slug);
  }
}
