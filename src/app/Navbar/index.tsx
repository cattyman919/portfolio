import React from 'react';
import { AntDesignOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-full p-3 bg-cyberpunk-5 ">
      <div>
        <Avatar size={40} icon={<AntDesignOutlined />} />
      </div>
      <div className="flex items-center justify-between gap-5 mr-10 ">
        <h2 className="m-0 border-0 border-b-4 cursor-pointer hover:border-solid border-cyberpunk-1 text-cyberpunk-3">
          Profile
        </h2>
        <h2 className="m-0 border-0 border-b-4 cursor-pointer hover:border-solid border-cyberpunk-1 text-cyberpunk-3">
          Projects
        </h2>
        <h2 className="m-0 border-0 border-b-4 cursor-pointer hover:border-solid border-cyberpunk-1 text-cyberpunk-3">
          Skills
        </h2>
      </div>
    </div>
  );
};

export { Navbar };
