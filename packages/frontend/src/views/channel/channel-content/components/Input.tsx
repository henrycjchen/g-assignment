import { ChangeEvent, KeyboardEvent, useState } from 'react';

export default function Input({
  onSend,
}: {
  onSend: (message: string) => void;
}) {
  const [value, setValue] = useState('');

  function onChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setValue(e?.target?.value);
  }

  function onKeyDown(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      e.preventDefault();
      onSend(value);
      setValue('');
    }
  }

  return (
    <div className="flex-shrink-0 h-100px pt-10px pr-20px pl-20px pb-10px">
      <textarea
        className="font-15 bg-divider h-100% w-100%"
        autoFocus
        onKeyDown={onKeyDown}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
