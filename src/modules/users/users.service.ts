import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/domains/entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  findByEmail(email: string): Promise<UserEntity | undefined> {
    const user = this.userRepository.findOne({
      where: {
        email: email,
      },
    });
    if (user) {
      return Promise.resolve(user);
    }
    return undefined;
  }

  findByName(name: string): Promise<UserEntity | undefined> {
    const user = this.userRepository.findOne({
      where: {
        name: name,
      },
    });
    if (user) {
      return Promise.resolve(user);
    }
    return undefined;
  }

  findById(id: number): Promise<UserEntity | undefined> {
    const user = this.userRepository.findOne({
      where: {
        id: id,
      },
    });
    if (user) {
      return Promise.resolve(user);
    }
    return undefined;
  }

  async create(user: UserEntity): Promise<UserEntity> {
    const { email, password } = user;

    const hashedPassword = await bcrypt.hash(password, 10);

    user.password = hashedPassword;

    // check if the user exists in the db
    const userInDb = await this.findByEmail(email);
    if (userInDb) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }

    const userResponse: UserEntity = await this.userRepository.save(user);
    return userResponse;
  }

  async update(id: number, user: UserEntity): Promise<UserEntity> {
    await this.userRepository.update(id, user);
    return this.userRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
