import { Module } from '@nestjs/common';
import { VoituresController } from './voitures.controller';
import { VoituresService } from './voitures.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [VoituresController],
  providers: [VoituresService, PrismaService]
})
export class VoituresModule {}
