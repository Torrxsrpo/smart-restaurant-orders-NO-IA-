import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './product/entities/product.entity.js';
import { User } from './users/entities/user.entity.js';
import { ProductModule } from './product/product.module.js';



@Module({
  imports: [
    ProductModule,

    ConfigModule.forRoot({
      isGlobal: true, // Disponible en toda la app sin re-importar
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST', 'localhost'),
        port: configService.get<number>('DB_PORT', 5432),
        username: configService.get<string>('DB_USER', 'postgres'),
        password: configService.get<string>('DB_PASSWORD', 'postgres123'),
        database: configService.get<string>('DB_NAME', 'restaurant_db'),
        entities: [Product, User], // Asegúrate de importar la entidad Product correctamente
        synchronize: true, // ⚠️ Solo para desarrollo (crea las tablas automáticamente)
        logging: true, // Habilita el logging de consultas SQL
      }),
    }),
    
  ], 
  controllers: [],
  providers: [],
})
export class AppModule {}