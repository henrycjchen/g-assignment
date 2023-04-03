
import MenuMembers from '@/assets/imgs/menu-member.png'
import MenuContributors from '@/assets/imgs/menu-contributors.png'

export default function People() {
  return (
    <>
      <div className="font-14 color-hint-light mb-30px">People</div>
      <div className="flex items-center mb-30px">
        <img className="w-40px h-40px mr-15px" src={MenuMembers} alt="" />
        <div className="font-18 color-hint">Chat</div>
      </div>
      <div className="flex items-center mb-30px">
        <img className="w-40px h-40px mr-15px" src={MenuContributors} alt="" />
        <div className="font-18 color-hint">Matches</div>
      </div>
    </>
  )
}