import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Achieve } from './entities/achieve.entity';

import { AchievementsController } from './achievements.controller';
import { AchievementsService } from './achievements.service';

@Module({
  imports: [TypeOrmModule.forFeature([Achieve])],
  controllers: [AchievementsController],
  providers: [AchievementsService],
})
export class AchievementsModule {}
