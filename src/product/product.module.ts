import { Module } from '@nestjs/common';
import { ProductService } from './product.service.js';
import { ProductController } from './product.controller.js';
import { Product } from './entities/product.entity.js';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product]), // Asegúrate de importar la entidad Product correctamente
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
