import { IsString } from 'class-validator';

export class CreateLocalDto {
  @IsString()
  endereco: string;

  @IsString()
  cep: string;

  @IsString()
  bairro: string;

  @IsString()
  estado: string;
}