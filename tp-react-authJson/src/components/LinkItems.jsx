import React from 'react';

function LinkItem({ item, onClick = null }) {
  return (
    <a 
      href={item.url} 
      className="flex items-center gap-2 hover:text-gray-300 duration-300"
      onClick={onClick}
    >
      <item.icon className="text-xl" />
      <span>{item.link}</span>
    </a>
  );
}

export default LinkItem