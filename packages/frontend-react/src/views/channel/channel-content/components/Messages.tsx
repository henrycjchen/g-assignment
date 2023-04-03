import MessageItem, {Direction} from './MessageItem';

export default function Messages() {
  return (
    <div className="p-20px">
      <MessageItem direction={Direction.Right} isPrimary={true} />
      <MessageItem direction={Direction.Left} />
    </div>
  );
}