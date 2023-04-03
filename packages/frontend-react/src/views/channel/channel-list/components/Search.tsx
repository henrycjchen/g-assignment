import IconSearch from '@/assets/imgs/icon-search.png';

export default function Search() {
  return (
    <div className="flex flex-shrink-0 items-center h-64px w-100% pl-20px pr-20px box-border"
      style={{ boxShadow: '0px 1px 0px rgba(255, 255, 255, 0.1)'}}
    >
      <img className="w-18px h-18px mr-10px" src={IconSearch} alt="" />
      <div className="font-15 color-text-secondary">Search</div>
    </div>
  )
}