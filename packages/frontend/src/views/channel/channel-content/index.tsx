import { sendMessage } from '@/apis/channel.api';
import { useMessages } from '@/hooks/channel.hook';
import { ChannelItem, MessageInfo } from '@/types/channel.type';
import Input from './components/Input';
import Messages from './components/Messages';
import Title from './components/Title';

export default function ChannelContent({
  channel,
  messages,
}: {
  channel?: ChannelItem;
  messages: MessageInfo[];
}) {
  function onSend(message: string) {
    if (channel) {
      sendMessage({
        message,
        channelId: channel._id,
      });
    }
  }

  // const [messages] = useMessages(channel?._id || '');

  return (
    <div className="flex flex-col w-100% bg-divider">
      {channel ? (
        <>
          <Title title={channel.title} count={channel.users.length} />
          <Messages messages={messages} channel={channel} />
          <div className="h-1px bg-#fff opacity-10"></div>
          <Input onSend={onSend} />
        </>
      ) : (
        ''
      )}
    </div>
  );
}
