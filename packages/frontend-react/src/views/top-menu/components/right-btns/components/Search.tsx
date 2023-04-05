import IconSearch from '@/assets/imgs/icon-search.png';

export default function Search() {
  return (
    <div className="flex p-10px mr-20px box-border border-rd-10px h-38px w-143px items-center bg-placeholder">
      <img src={IconSearch} className="w-18px h-18px mr-5px" alt="" />
      <div className="color-hint font-14">Search</div>
    </div>
  );
}
