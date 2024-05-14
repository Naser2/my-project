import React from 'react';

const SidebarItem = ({ icon, text }) => {
  return (
    <div className="mt-4 py-1.5 text-sm font-medium text-slate-500 hover:text-blue-500 group cursor-pointer flex items-center">
      {icon}
      <span>{text}</span>
    </div>
  );
};

export default SidebarItem;