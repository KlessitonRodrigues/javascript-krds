import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
@Unique(['email'])
export class Users extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false, type: 'varchar', length: 200 })
  email: string;

  @Column({ nullable: false, type: 'varchar', length: 200 })
  name: string;

  @Column({ nullable: false, type: 'varchar', length: 20 })
  role: string;

  @Column({ nullable: false, default: true })
  status: string;

  @Column({ nullable: false })
  password: string;

  @Column({ nullable: false })
  salt: string;

  @Column({ nullable: false, type: 'varchar', length: 64 })
  confirmationToken: string;

  @Column({ nullable: false, type: 'varchar', length: 64 })
  recoveryToken: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
