import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductoService } from './productos.service';
import { Producto } from 'src/schemas/productos.schema';

@Controller('productos')
export class ProductosController {
  constructor(private readonly productoService: ProductoService) {}

  @Post()
  async crear(@Body() producto: Producto) {
    return this.productoService.crear(producto);
  }

  @Get()
  async obtenerTodas() {
    return this.productoService.obtenerTodas();
  }
}
