import { NotificationsController } from './kafka/controllers/notifications.controllers';
import { Module } from '@nestjs/common';
import { KafkaConsumerService } from './kafka/kafka-consumer.service';
import { SendNotification } from '@app/use-cases/send-notification';
import { DatabaseModule } from '@infra/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [KafkaConsumerService, SendNotification],
})
export class MessagingModule {}
