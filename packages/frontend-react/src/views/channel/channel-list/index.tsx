
import { useState } from 'react';
import Item from './components/Item';
import Search from './components/Search';


const channels = [{
  title: 'Courtney Henry',
  avatar: '',
  message: 'So, what\'s your plan this weekend?',
}, {
  title: 'Albert Flores',
  avatar: '',
  message: 'What\'s the progress on that task?',
}, {
  title: 'Albert Flores',
  avatar: '',
  message: 'What\'s the progress on that task?',
}, {
  title: 'Albert Flores',
  avatar: '',
  message: 'What\'s the progress on that task?',
}, {
  title: 'Albert Flores',
  avatar: '',
  message: 'What\'s the progress on that task?',
}, {
  title: 'Albert Flores',
  avatar: '',
  message: 'What\'s the progress on that task?',
}, {
  title: 'Albert Flores',
  avatar: '',
  message: 'What\'s the progress on that task?',
}, {
  title: 'Albert Flores',
  avatar: '',
  message: 'What\'s the progress on that task?',
}, {
  title: 'Albert Flores',
  avatar: '',
  message: 'What\'s the progress on that task?',
}]

export default function ChannelList() {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <div className="flex flex-shrink-0 flex-col h-100% w-340px bg-channel-list overflow-scroll"> 
      <Search />
      {
        channels.map((item, index) => 
          <Item data={item} key={index} isActive={index === activeIndex} />
        )
      }
    </div>
  )
}