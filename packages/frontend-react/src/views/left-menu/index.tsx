

import Engage from './components/Engage';
import People from './components/People';
import LogoLeft from '@/assets/imgs/logo-left.png';

export default function LeftMenu() {
  return (
    <div className="pl-30px flex flex-col justify-between mr-30px">
      <div>
        <Engage />
        <div className="w-165px h-1px bg-divider mb-30px"></div>
        <People />
      </div>
      <img className="w-119px h-33.44px" src={LogoLeft} alt="" />    
    </div>
  )
}