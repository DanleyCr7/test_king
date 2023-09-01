import { UserDto } from '../../dto/user_dto';
import { UserEntity } from '../../../../domains/entities/user.entity';

export const toUserDto = (data: UserEntity): UserDto => {
  const { id, name, email } = data;
  const userDto: UserDto = { id, name, email };
  return userDto;
};
