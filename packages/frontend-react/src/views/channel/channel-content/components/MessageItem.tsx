export enum Direction {
  Left = 1,
  Right = 2
}

export default function MessageItem({direction=Direction.Left, isPrimary=false}: {direction: Direction, isPrimary?: boolean}) {
  return (
    <div className={
      'flex mb-30px '
      + (direction===Direction.Right?'flex-row-reverse':'')
    }>
      <img className="w-40px h-40px border-rd-50% bg-main" src="" alt="" />
      <div className="w-10px"></div>
      <div>
        <div className="flex mb-5px">
          <div className="font-12 color-text-primary mr-10px">Devon Lane</div>
          <div className="font-12 color-text-secondary">20:34</div>
        </div>
        <div className={
          'font-15 p-15px border-rd-8px '
          + (direction === Direction.Left? 'border-rd-lt-0 ':'border-rd-rt-0 ')
          + (isPrimary ? 'bg-card-primary color-#0C0E13' : 'bg-card-highlight2')
        }>
          Check out Vanilla Forums (11/17 - 11/18/20) for free.
        </div>
      </div>
    </div>
  )
}