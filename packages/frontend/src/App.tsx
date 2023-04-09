import TopMenu from './views/top-menu/index';
import LeftMenu from './views/left-menu/index';
import Channel from './views/channel/index';
import LoginModal from './components/LoginModal';
import { useState } from 'react';

export default function App() {
  const [isReady, setIsReady] = useState(false);

  function onReady(isReady: boolean) {
    setIsReady(isReady);
  }

  return (
    <>
      <LoginModal onReady={onReady} />
      {isReady ? (
        <div className="bg-main h-100vh w-100vw flex flex-col">
          <TopMenu />
          <div className="flex flex-1 pb-20px overflow-hidden">
            <LeftMenu />
            <Channel />
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
}
