import { AntDesignOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { debug } from 'console';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // just trigger this so that the initial state
    // is updated as soon as the component is mounted
    // related: https://stackoverflow.com/a/63408216
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const router = useRouter();
  console.log(scrollY);
  return (
    <div className="fixed flex items-center justify-between w-full p-3 z-[1] border-0 border-b-2 border-solid border-cyberpunk-1 bg-cyberpunk-5">
      <div>
        <Avatar size={40} icon={<AntDesignOutlined />} />
      </div>
      <div className="flex items-center justify-between gap-5 mr-10 ">
        <Link href="#profile-section">
          <h2 className="m-0 border-0 border-b-4 cursor-pointer hover:border-solid border-cyberpunk-1 text-cyberpunk-3">
            Profile
          </h2>
        </Link>
        <Link href="#projects-section">
          <h2 className="m-0 border-0 border-b-4 cursor-pointer hover:border-solid border-cyberpunk-1 text-cyberpunk-3">
            Projects
          </h2>
        </Link>
        <Link href="#skills-section">
          <h2 className="m-0 border-0 border-b-4 cursor-pointer hover:border-solid border-cyberpunk-1 text-cyberpunk-3">
            Skills
          </h2>
        </Link>

        <h2 className="px-3 m-0 transition-all rounded cursor-pointer text-cyberpunk-5 bg-cyberpunk-3 hover:bg-cyberpunk-1">
          Posts
        </h2>
      </div>
    </div>
  );
};

export { Navbar };
