import MessageItem, {Direction} from './MessageItem';

export default function Messages() {
  return (
    <div className="flex flex-col flex-1">
      <div className="p-20px flex-1">
        <MessageItem direction={Direction.Right} isPrimary={true} />
        <MessageItem direction={Direction.Left} />
      </div>
      <div className="h-1px bg-#fff opacity-10"></div>
    </div>
  );
}