import MenuForum from '@/assets/imgs/menu-forum.png';
import MenuChat from '@/assets/imgs/menu-chat.png';
import MenuMatches from '@/assets/imgs/menu-Matches.png';

export default function Engage() {
  return (
    <>
      <div className="font-14 color-hint-light mb-30px">Engage</div>
      <div className="flex items-center mb-30px">
        <img className="w-40px h-40px mr-15px" src={MenuForum} alt="" />
        <div className="font-18 color-hint">Forum</div>
      </div>
      <div className="flex items-center mb-30px">
        <img className="w-40px h-40px mr-15px" src={MenuChat} alt="" />
        <div className="font-18 color-hint">Chat</div>
      </div>
      <div className="flex items-center mb-30px">
        <img className="w-40px h-40px mr-15px" src={MenuMatches} alt="" />
        <div className="font-18 color-hint">Matches</div>
      </div>
    </>
  );
}
