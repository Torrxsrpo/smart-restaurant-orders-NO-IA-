import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ type: 'text' })
  ingredients: string;

  @Column('decimal', { precision: 10, scale: 2, default: 0 })
  price: number;

  @Column()
  categoryId: string;

  @Column({ default: true })
  isAvailable: boolean;
}

