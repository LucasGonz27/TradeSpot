import { Module } from '@nestjs/common';
import { AnnoncesController } from './annonces.controller';
import { AnnoncesService } from './annonces.service';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [AnnoncesController],
  providers: [AnnoncesService, PrismaService]
})
export class AnnoncesModule {}
