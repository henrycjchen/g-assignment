import IconSearch from '@/assets/imgs/icon-search.png';
import { useChannelTitle } from '@/hooks/channel.hook';
import { userId } from '@/store/user.store';
import { ChannelItem } from '@/types/channel.type';

export default function Item({
  channel,
  isActive,
  onClick,
}: {
  channel: ChannelItem;
  isActive: boolean;
  onClick: () => void;
}) {
  const title = useChannelTitle(channel);
  const toUser = channel.users.find(
    (user) => (user._id as unknown as string) !== userId
  );

  return (
    <div
      className={
        'flex-shrink-0 flex h-75px pl-20px items-center ' +
        (isActive ? 'bg-divider' : '')
      }
      onClick={onClick}
    >
      <img
        className="w-40px h-40px mr-10px bg-placeholder border-rd-50%"
        src={toUser?.avatar}
        alt=""
      />
      <div className="flex flex-col justify-center">
        <div className="font-heading-h5 color-text-primary mb-2px">{title}</div>
        <div className="font-heading-h6 color-text-secondary">
          So, what&apos;s your plan this weekend?
        </div>
      </div>
    </div>
  );
}
