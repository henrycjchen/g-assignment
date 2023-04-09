import { Button, Modal, Input, Radio, Space } from 'antd';
import { useState } from 'react';
import type { RadioChangeEvent } from 'antd';
import { login } from '@/store/user.store';
import { initSocketIO } from '@/utils/request';

export default function LoginModal({
  onReady,
}: {
  onReady: (isReady: boolean) => void;
}) {
  const [open, setOpen] = useState(true);
  const [value, setValue] = useState('');

  const onOk = () => {
    setOpen(false);
    login(value);
    initSocketIO();
    onReady(true);
  };

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };

  return (
    <Modal
      title={
        <div
          style={{
            width: '100%',
            cursor: 'move',
          }}
        >
          Choose your user to login
        </div>
      }
      open={open}
      onOk={onOk}
      cancelButtonProps={{ disabled: true }}
    >
      <Radio.Group onChange={onChange} value={value}>
        <Space direction="vertical">
          <Radio value={'642cdfe297efefb12fcc0eb7'}>Courtney Henry</Radio>
          <Radio value={'642b6f0a97efefb12fcc0e9f'}>Darlene Robertson</Radio>
          <Radio value={'642b6fc697efefb12fcc0ea0'}>Devon Lane</Radio>
        </Space>
      </Radio.Group>
    </Modal>
  );
}
