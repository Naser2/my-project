// Message.js
import React from 'react';
import profileDefault from '@/assets/images/profile.png';

const tabsPanel = [
    { name: 'Posts', href: '#', data:808, current: false },
    { name: 'About', href: '/diets/women', data:'2.4k', current: true },
    { name: 'Following', href: '/diets/men',data:1708, current: false },
  ]




const Message = ({ sender, content, timestamp, isMe }) => {
    console.log("SENDER",sender)
    
  return (
    <div className={isMe ? 'w-full flex justify-end mt-3' : 'w-full flex flex-start'}>
      <div className="w-1/2">
        <div className="flex items-center">
          <img className="h-5 w-5 overflow-hidden rounded-full" src={sender?.avatar && sender.avatar || profileDefault} alt="" />
          <p className="font-semibold ml-3 text-sm text-slate-600">{sender?.name} <span className="text-slate-400 text-xs">{timestamp}</span></p>
        </div>
        <div className={isMe ? 'mt-3 w-full bg-blue-500 p-4 rounded-b-xl rounded-tl-xl' : 'mt-3 bg-slate-50 p-4 rounded-b-xl rounded-tr-xl'}>
          <p className={isMe ? 'text-sm text-white' : 'text-sm text-slate-500'}>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Message;
