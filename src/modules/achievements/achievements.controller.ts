import { Controller, Post } from '@nestjs/common';

import { AchievementsService } from './achievements.service';

@Controller('achievements')
export class AchievementsController {
  constructor(private readonly achievementsService: AchievementsService) {}

  @Post('addDB')
  createDB() {
    return this.achievementsService.createDB();
  }
}
