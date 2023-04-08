import IconMember from '@/assets/imgs/icon-member.png';

export default function Title({
  title,
  count,
}: {
  title: string;
  count: number;
}) {
  return (
    <>
      <div className="flex justify-between h-64px items-center pl-20px pr-20px">
        <div className="font-18-heavy">{title}</div>
        <div className="h-44px w-104px flex justify-center items-center border-rd-50px border-1px border-solid border-text-secondary">
          <img className="w-24px h-24px mr-10px" src={IconMember} alt="" />
          <div className="font-15-heavy">{count}</div>
        </div>
      </div>
      <div className="h-1px bg-#fff opacity-10"></div>
    </>
  );
}
