import {
  Entity,
  BaseEntity,
  PrimaryColumn,
  ManyToOne,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import Store from './Store';

@Entity()
class Product {
  @PrimaryColumn('uuid', { generated: 'uuid' })
  id: string;

  @Column({
    type: 'varchar',
    length: 50,
  })
  name: string;

  @Column('decimal')
  price: number;

  @Column('int')
  quantity: number;

  @Column('text')
  description: string;

  @ManyToOne(() => Store, (store) => store.products)
  store: Store;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updateAt: Date;
}

export default Product;
