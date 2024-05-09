import { Injectable } from '@nestjs/common';
import { CreateLocalDto } from './dto/create-local.dto';
import { UpdateLocalDto } from './dto/update-local.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LocalService {
  constructor(private readonly prisma: PrismaService) {}

  create(createLocalDto: CreateLocalDto) {
    return this.prisma.local.create({
      data: createLocalDto
    });
  }

  async findAll() {
    return this.prisma.local.findMany();
  }

  findOne(id: number) {
    return this.prisma.local.findUnique({
      where: { id },
    });
  }

  update(id: number, updateLocalDto: UpdateLocalDto) {
    return this.prisma.local.update({
      where: { id },
      data: updateLocalDto
    });
  }

  async remove(id: number) {
    return await this.prisma.local.delete({
      where: { id },
    });
  }
}
