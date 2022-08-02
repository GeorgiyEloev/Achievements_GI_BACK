import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { BaseDateColumn } from '../../../constants';
import { Achieve } from '../../achievements/entities/achieve.entity';

@Entity({ name: 'users' })
export class User extends BaseDateColumn {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    length: 50,
    unique: true,
  })
  email: string;

  @Column({ type: 'text', select: false })
  password: string;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'text', nullable: true })
  avatar: string | null;

  @ManyToMany(() => Achieve, (achieves) => achieves.users, {
    cascade: true,
  })
  @JoinTable()
  achieves: Achieve[];
}
