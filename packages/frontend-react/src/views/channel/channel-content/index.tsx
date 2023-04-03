

import Input from './components/Input';
import Messages from './components/Messages';
import Title from './components/Title';

export default function ChannelContent() {
  return (
    <div className="flex flex-col w-100%">
      <Title />
      <Messages />
      <Input />
    </div>
  )
}