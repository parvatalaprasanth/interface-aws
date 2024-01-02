import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongModule } from './song/song.module';
import { MessagesModule } from './messages/messages.module';
import { DogModule } from './dog/dog.module';

@Module({
  imports: [SongModule, MessagesModule, DogModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
