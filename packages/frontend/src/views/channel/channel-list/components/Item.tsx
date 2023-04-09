import IconSearch from '@/assets/imgs/icon-search.png';
import { useChannelTitle } from '@/hooks/channel.hook';
import { userId } from '@/store/user.store';
import { ChannelItem, MessageInfo } from '@/types/channel.type';
import { ChannelType } from '@gradual/backend/src/modules/channel/channel.type';
import dayjs from 'dayjs';

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
  const toUser = channel.users.find(
    (user) => (user._id as unknown as string) !== userId
  );

  const imgSize = (() => {
    if (channel.users.length > 4) {
      return 'w-12px h-12px';
    }
    if (channel.users.length > 2) {
      return 'w-19px h-19px';
    }
    return 'w-19px h-40px';
  })();

  return (
    <div
      className={
        'flex-shrink-0 flex h-75px pl-20px pr-20px items-center ' +
        (isActive ? 'bg-divider' : '')
      }
      onClick={onClick}
    >
      <div className="relative">
        <div className="flex items-center w-40px h-40px mr-10px bg-placeholder border-rd-50% overflow-hidden">
          <>
            {channel.type === ChannelType.User ? (
              <img
                src={toUser?.avatar}
                alt=""
                className="w-100% h-100% object-cover"
              />
            ) : (
              <div
                className={`
                grid
                ${channel.users.length < 5 ? 'grid-cols-2' : 'grid-cols-3'}
                gap-2px
              `}
              >
                {channel.users.map((user) => (
                  <img
                    src={user?.avatar}
                    key={user._id as unknown as string}
                    alt=""
                    className={imgSize + ' object-cover'}
                  />
                ))}
              </div>
            )}
          </>
        </div>
        {unreadCount ? (
          <div className="absolute top--3px right-4px flex justify-center items-center w-18px h-18px bg-unread color-white border-rd-50% font-11">
            {unreadCount}
          </div>
        ) : (
          ''
        )}
      </div>
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
