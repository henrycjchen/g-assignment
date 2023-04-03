import IconMember from '@/assets/imgs/icon-member.png'

export default function Title() {
  return (
    <div className="flex justify-between h-55px items-center pl-20px pr-20px">
      <div>Share your story</div>
      <div className="h-44px w-104px flex justify-center items-center border-rd-50px border-1px border-solid border-text-secondary">
        <img className="w-24px h-24px mr-10px" src={IconMember} alt="" />
        <div className="font-15-heavy">4</div>
      </div>
    </div>
  )
}