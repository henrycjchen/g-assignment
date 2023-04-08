import Logo from './components/Logo';
import RightBtns from './components/right-btns/index';

export default function TopMenu() {
  return (
    <div className="flex justify-between items-center pl-20px pt-15px pb-15px pr-30px">
      <Logo />
      <RightBtns />
    </div>
  );
}
