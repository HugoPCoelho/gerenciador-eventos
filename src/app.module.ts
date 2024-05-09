import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { CategoriaModule } from './categoria/categoria.module';
import { LocalModule } from './local/local.module';

@Module({
  imports: [PrismaModule, CategoriaModule, LocalModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
