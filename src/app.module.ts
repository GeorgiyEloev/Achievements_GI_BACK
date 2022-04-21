import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { DoneModule } from './done/done.module';
import { AppController } from './app.controller';
import { AchievementsModule } from './achievements/achievements.module';

@Module({
  imports: [
    UserModule,
    AchievementsModule,
    DoneModule,
    MongooseModule.forRoot(process.env.MONGODB_URL),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
