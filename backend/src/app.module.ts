import { Module } from '@nestjs/common'
import { UsersModule } from './users/users.module';
import { VoituresModule } from './voitures/voitures.module';
import { AnnoncesModule } from './annonces/annonces.module';
import { MessagesModule } from './messages/messages.module';
import { ConversationsModule } from './conversations/conversations.module';

@Module({
  imports: [UsersModule, VoituresModule, AnnoncesModule, MessagesModule, ConversationsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
