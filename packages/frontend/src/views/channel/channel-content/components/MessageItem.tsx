import { useUser } from '@/hooks/user.hook';
import { MessageInfo } from '@/types/channel.type';
import dayjs from 'dayjs';

export enum Direction {
  Left = 1,
  Right = 2,
}

export default function MessageItem({
  message,
  direction = Direction.Left,
}: {
  direction: Direction;
  message: MessageInfo;
}) {
  const [user] = useUser(message.userId);

  return (
    <div
      className={
        'flex mb-30px ' +
        (direction === Direction.Right ? 'flex-row-reverse' : '')
      }
    >
      <img
        className="w-40px h-40px border-rd-50% bg-main"
        src={user?.avatar}
        alt=""
      />
      <div className="w-10px"></div>
      <div>
        <div className="flex mb-5px">
          <div className="font-12 color-text-primary mr-10px">{user?.name}</div>
          <div className="font-12 color-text-secondary">
            {dayjs(message.timestamp).format('hh:mm')}
          </div>
        </div>
        <div
          className={
            'font-15 p-15px border-rd-8px ' +
            (direction === Direction.Left
              ? 'border-rd-lt-0 '
              : 'border-rd-rt-0 ') +
            (direction === Direction.Right
              ? 'bg-card-primary color-#0C0E13'
              : 'bg-card-highlight2')
          }
        >
          {message.message}
        </div>
      </div>
    </div>
  );
}
