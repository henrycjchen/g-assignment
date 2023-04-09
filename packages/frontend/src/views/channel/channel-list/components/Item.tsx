import { useChannelTitle } from '@/hooks/channel.hook';
import { ChannelItem, MessageInfo } from '@/types/channel.type';
import dayjs from 'dayjs';
import Avatar from './Avatar';

export default function Item({
  channel,
  isActive,
  messages,
  unreadCount,
  onClick,
}: {
  channel: ChannelItem;
  isActive: boolean;
  messages: MessageInfo[];
  unreadCount: number;
  onClick: () => void;
}) {
  const title = useChannelTitle(channel);

  return (
    <div
      className={
        'flex-shrink-0 flex h-75px pl-20px pr-20px items-center ' +
        (isActive ? 'bg-divider' : '')
      }
      onClick={onClick}
    >
      <Avatar unreadCount={unreadCount} channel={channel} />
      <div className="flex flex-col justify-center flex-1">
        <div className="flex justify-between items-center">
          <div className="font-heading-h5 color-text-primary mb-2px ">
            {title}
          </div>
          <div className="font-12 color-text-secondary">
            {dayjs(messages[messages.length - 1]?.timestamp).format('hh:mm')}
          </div>
        </div>
        <div className="flex-shrink-0 h-20px font-heading-h6 color-text-secondary">
          {messages[messages.length - 1]?.message}
        </div>
      </div>
    </div>
  );
}
