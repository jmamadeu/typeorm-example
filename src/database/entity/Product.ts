import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
  Column,
} from 'typeorm';
import Store from './Store';

@Entity()
class Product extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  Id: string;

  @Column({
    type: 'string',
    length: 50,
  })
  Name: string;

  @Column('decimal')
  Price: number;

  @Column('int')
  Quantity: number;

  @Column('text')
  Description: string;

  @ManyToOne((type) => Store, (store) => store.Products)
  Store: Store;
}

export default Product;
