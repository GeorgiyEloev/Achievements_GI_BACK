import { Module } from '@nestjs/common';
import { DoneService } from './done.service';
import { DoneController } from './done.controller';

@Module({
  controllers: [DoneController],
  providers: [DoneService],
})
export class DoneModule {}
