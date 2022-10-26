import { AntDesignOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { useState, useEffect } from 'react';

const Navbar = (props) => {
  const [clientWindowHeight, setClientWindowHeight] = useState<number>();
  const [navBorderColor, setNavBorderColor] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (clientWindowHeight > 100) {
      setNavBorderColor(true);
    } else {
      setNavBorderColor(false);
    }
  }, [clientWindowHeight]);

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  const ScrollToSection = (e, section_name: string) => {
    e.preventDefault();
    let section = document.getElementById(section_name);
    section && section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div
        className={`fixed flex items-center justify-center sm:justify-between w-full px-[8.5vw] py-3  z-[1] transition-all before:content-[""] before:absolute before:left-0 before:bottom-0  before:border-b before:border-solid before:bg-cyberpunk-1 ${
          navBorderColor
            ? 'before:w-0 before:animate-border_nav_anim'
            : 'before:w-full before:animate-border_nav_anim_reverse'
        } bg-cyberpunk-5`}
      >
        <div className="hidden sm:block">
          <Avatar size={40} icon={<AntDesignOutlined />} />
        </div>
        <div className="flex gap-5">
          <a
            href="/"
            onClick={(e) => {
              ScrollToSection(e, 'profile-section');
            }}
          >
            <h2 className="m-0 transition-all bg-transparent border-0 border-b-4 border-solid cursor-pointer border-cyberpunk-5 hover:border-cyberpunk-1 text-cyberpunk-3">
              Profile
            </h2>
          </a>
          <a
            href="/"
            onClick={(e) => {
              ScrollToSection(e, 'projects-section');
            }}
          >
            <h2 className="m-0 transition-all bg-transparent border-0 border-b-4 border-solid cursor-pointer border-cyberpunk-5 hover:border-cyberpunk-1 text-cyberpunk-3">
              Projects
            </h2>
          </a>
          <a
            href="/"
            onClick={(e) => {
              ScrollToSection(e, 'skills-section');
            }}
          >
            <h2 className="m-0 transition-all bg-transparent border-0 border-b-4 border-solid cursor-pointer border-cyberpunk-5 hover:border-cyberpunk-1 text-cyberpunk-3">
              Skills
            </h2>
          </a>

          <h2 className="px-3 m-0 transition-all rounded cursor-pointer text-cyberpunk-5 bg-cyberpunk-3 hover:bg-cyberpunk-1 hover:text-cyberpunk-2 ">
            Posts
          </h2>
        </div>
      </div>
      {props.children}
    </>
  );
};

export { Navbar };
