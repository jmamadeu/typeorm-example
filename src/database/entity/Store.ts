import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  OneToMany,
  Column,
} from 'typeorm';
import Product from './Product';

@Entity()
class Store extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'uuid' })
  Id: string;

  @Column({
    type: 'varchar',
    unique: true,
    length: 50,
  })
  Name: string;

  @Column({
    type: 'text',
  })
  Description: string;

  @OneToMany((type) => Product, (product) => product.Store)
  Products: Product[];
}

export default Store;
