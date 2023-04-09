import { ChannelType } from '@gradual/backend/src/modules/channel/channel.type';
import { ChannelItem } from '@/types/channel.type';
import { userId } from '@/store/user.store';

export default function Avatar({
  channel,
  unreadCount,
}: {
  unreadCount: number;
  channel: ChannelItem;
}) {
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
  );
}
