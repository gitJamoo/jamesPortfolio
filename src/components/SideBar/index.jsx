import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaFire, FaPoo, FaLinkedin } from 'react-icons/fa';

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 flex flex-col
                  bg-white dark:bg-gray-900 shadow-lg">
                    
        <SideBarIcon icon={<FaFire size="28" />}text={"fiyaaaaaaaaaaaaa"} />
        <Divider />
        <SideBarIcon icon={<BsPlus size="32" />}text={"plus"} />
        <SideBarIcon icon={<BsFillLightningFill size="20" />}text={"its lit"} />
        <SideBarIcon icon={<FaPoo size="20" />}text={"poop.exe"} />
        <Divider />
        <SideBarIcon icon={<FaLinkedin size="22" />} text={"my linkedin"} link={"https://www.youtube.com/"} />
        <SideBarIcon icon={<FaLinkedin size="22" />} text={"github"} link={"https://www.youtube.com/"} />
        <Divider />
        <SideBarIcon icon={<BsGearFill size="22" />} text={"settings"} />
    </div>
  );
};

const SideBarIcon = ({ icon, text, link }) => (
  <a href={link}>
  <div className="sidebar-icon group">
    {icon}
    <span class="sidebar-tooltip group-hover:scale-100">
      {text}
    </span>
  </div>
  </a>
);


const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;
