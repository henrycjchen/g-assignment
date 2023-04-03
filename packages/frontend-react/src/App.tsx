import TopMenu from './views/top-menu/index';
import LeftMenu from './views/left-menu/index';
import Channel from './views/channel/index';

export default function App() {
  return (
    <div className="bg-main h-100vh w-100vw flex flex-col">
      <TopMenu />
      <div className="flex flex-1 pb-20px overflow-hidden">
        <LeftMenu />
        <Channel />
      </div>
    </div>
  )
}
