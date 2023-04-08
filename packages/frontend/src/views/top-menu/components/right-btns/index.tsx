import Search from './components/Search';
import Time from './components/Time';
import IconBell from '@/assets/imgs/icon-bell.png';
import IconHelp from '@/assets/imgs/icon-help-circle.png';
import { useUser } from '@/hooks/user.hook';
import { userId } from '@/store/user.store';

export default function RightBtns() {
  const [user] = useUser(userId);

  return (
    <div className="flex items-center">
      <Search />
      <Time />
      <img className="w-24px h-24px mr-22px" src={IconBell} alt="" />
      <img className="w-24px h-24px mr-20px" src={IconHelp} alt="" />
      <img className="w-36px h-36px" src={user?.avatar} alt="" />
    </div>
  );
}
