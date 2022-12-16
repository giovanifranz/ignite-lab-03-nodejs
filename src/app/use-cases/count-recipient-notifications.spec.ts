import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { CountRecipientNotifications } from './count-recipient-notifications';
import { makeNotification } from '@test/factories/notification-factory';

describe('Count recipient notification', () => {
  it('should be able to count recipient a notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotifications = new CountRecipientNotifications(
      notificationsRepository,
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-id-1' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-id-1' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-id-2' }),
    );

    const { count: count_id_1 } = await countRecipientNotifications.execute({
      recipientId: 'recipient-id-1',
    });

    const { count: count_id_2 } = await countRecipientNotifications.execute({
      recipientId: 'recipient-id-2',
    });

    expect(count_id_1).toEqual(2);
    expect(count_id_2).toEqual(1);
  });
});
