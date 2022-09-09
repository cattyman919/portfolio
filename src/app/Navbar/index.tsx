import React from 'react';
import { Button, Typography } from 'antd';
const Navbar = () => {
  const { Title } = Typography;
  return (
    <div className="flex items-center justify-between w-full bg-blue-400">
      <div>
        <h2 className="text-red-400 text-success">LOGsO</h2>
      </div>
      <div className="">
        <Title level={4} className="text-red-400">
          Profile
        </Title>
        <Title level={4}>Projects</Title>
        <Title level={4}>Skills</Title>
      </div>
    </div>
  );
};

export { Navbar };
