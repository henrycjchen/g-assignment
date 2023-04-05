import type { Channel } from '../type';

export default function Item({
  isActive,
}: {
  data: Channel;
  isActive: boolean;
}) {
  return (
    <div
      className={
        'flex-shrink-0 flex h-75px pl-20px items-center ' +
        (isActive ? 'bg-divider' : '')
      }
    >
      <img
        className="w-40px h-40px mr-10px bg-placeholder border-rd-50%"
        src=""
        alt=""
      />
      <div className="flex flex-col justify-center">
        <div className="font-heading-h5 color-text-primary mb-2px">
          Courtney Henry
        </div>
        <div className="font-heading-h6 color-text-secondary">
          So, what&apos;s your plan this weekend?
        </div>
      </div>
    </div>
  );
}
