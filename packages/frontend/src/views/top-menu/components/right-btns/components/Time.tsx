import IconGlobal from '@/assets/imgs/icon-global.png';

export default function Time() {
  return (
    <div className="flex items-center mr-20px">
      <img className="w-24px h-24px mr-5px" src={IconGlobal} alt="" />
      <div className="font-14 color-hint">UTC -05:00 Chicago</div>
    </div>
  );
}
