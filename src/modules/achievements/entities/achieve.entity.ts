import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

import { BaseDateColumn } from '../../../constants';
import { User } from '../../user/entities/user.entity';

@Entity({ name: 'achieve' })
export class Achieve extends BaseDateColumn {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
  })
  name: string;

  @Column({
    type: 'text',
  })
  text: string;

  @Column({
    type: 'varchar',
  })
  value: string;

  @Column({
    type: 'varchar',
  })
  ver: string;

  @Column({
    type: 'varchar',
  })
  urlHelper: string;

  @ManyToMany(() => User, (users) => users.achieves, {
    cascade: true,
  })
  users: User[];
}
