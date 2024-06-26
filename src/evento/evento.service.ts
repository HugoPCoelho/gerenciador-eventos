import { Injectable } from '@nestjs/common';
import { CreateEventoDto } from './dto/create-evento.dto';
import { UpdateEventoDto } from './dto/update-evento.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EventoService {
  constructor(private readonly prisma: PrismaService) {}

  create(createEventoDto: CreateEventoDto) {
    return this.prisma.evento.create({
      data: createEventoDto
    });
  }

  async findAll() {
    return this.prisma.evento.findMany();
  }

  findOne(id: number) {
    return this.prisma.evento.findUnique({
      where: { id }
    });
  }

  update(id: number, updateEventoDto: UpdateEventoDto) {
    return this.prisma.evento.update({
      where: { id },
      data: updateEventoDto
    });
  }

  async remove(id: number) {
    return await this.prisma.evento.delete({
      where: { id }
    });
  }
}
