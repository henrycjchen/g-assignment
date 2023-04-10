import { Modal, Radio, Space } from 'antd';
import { useState } from 'react';
import type { RadioChangeEvent } from 'antd';
import { login } from '@/store/user.store';
import { initSocketIO } from '@/utils/request';

/**
 * mock data, users to choose and login
 */
const users = [
  {
    _id: '642b703597efefb12fcc0ea4',
    name: 'Jenny White',
    avatar: '/src/assets/imgs/avatar-woman-short.png',
  },
  {
    _id: '642cdfe297efefb12fcc0eb7',
    name: 'Courtney Henry',
    avatar: '/src/assets/imgs/avatar-woman-long.png',
  },
  {
    _id: '642b700697efefb12fcc0ea2',
    name: 'Albert Flores',
    avatar: '/src/assets/imgs/avatar-man-yellow.png',
  },
  {
    _id: '642b6f0a97efefb12fcc0e9f',
    name: 'Darlene Robertson',
    avatar: '/src/assets/imgs/avatar-man-black.png',
  },
  {
    _id: '642b6fc697efefb12fcc0ea0',
    name: 'Devon Lane',
    avatar: '/src/assets/imgs/avatar-woman-gray.png',
  },
];

/**
 * component: login modal
 * choose user to login
 */
export default function LoginModal({
  onReady,
}: {
  /**
   * tell the parent component that the login is ready
   */
  onReady: (isReady: boolean) => void;
}) {
  /**
   * open the modal or not
   */
  const [open, setOpen] = useState(true);
  /**
   * the user you choose
   */
  const [value, setValue] = useState('');

  /**
   * confirm the user you choose
   * setUserId and build websocket
   */
  const onOk = () => {
    setOpen(false);

    //#region login and build websocket
    login(value);
    initSocketIO();
    //#endregion

    onReady(true);
  };

  /**
   * set user choose value
   */
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
          {users.map((user) => (
            <Radio value={user._id} key={user._id}>
              <div className="flex items-center">
                <img
                  src={user.avatar}
                  alt=""
                  className="w-40px h-40px mr-10px"
                />
                {user.name}
              </div>
            </Radio>
          ))}
        </Space>
      </Radio.Group>
    </Modal>
  );
}
