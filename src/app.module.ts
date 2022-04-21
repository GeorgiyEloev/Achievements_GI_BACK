import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AchievementsModule } from './achievements/achievements.module';
import { DoneModule } from './done/done.module';

@Module({
  imports: [UserModule, AchievementsModule, DoneModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
