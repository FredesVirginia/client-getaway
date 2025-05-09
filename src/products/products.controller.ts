import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';


@Controller('products')
export class ProductsController {
  constructor() {}


  @Post()
  createProduct(){
    return "Creacion de Producto"
  }

  @Get()
  findAllProduct(){
    return "Todos productos"
  }

  @Get(":id")
  findOne(@Param('id') id : string){
    return "Devolviendo un producto"
  }


  @Delete(":id")
  deleteProduct(@Param('id') id : string){
    return "Borrando un producto"
  }


  @Patch(":id")
  updateProduct(@Param('id') id : string){
    return "Actualizando un producto"
  }

}
