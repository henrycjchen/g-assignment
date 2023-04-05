import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './schemas/user.schema';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('')
  async findAll(): Promise<User[]> {
    const result = await this.userService.findAll();
    console.log('findAll result', result);
    return result;
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<User> {
    const result = await this.userService.findOne(id);
    console.log('result', result);
    return result;
  }
}
