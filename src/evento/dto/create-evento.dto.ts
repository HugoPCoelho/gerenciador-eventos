import { Categoria , Local} from '@prisma/client';
import { IsDateString, IsInt, IsObject, IsString } from 'class-validator';

export class CreateEventoDto {
  @IsString()
  nome: string;

  @IsString()
  descricao: string;

  @IsDateString()
  data: Date;

  @IsInt()
  idCategoria: number;

  @IsInt()
  idLocal: number;

}