import { BsPlus, BsGearFill } from 'react-icons/bs';
import { FaFire, FaLinkedin, FaGamepad } from 'react-icons/fa';
import {AiOutlineGithub, AiOutlineTwitter, AiFillCreditCard} from 'react-icons/ai';
import {GrInstagram} from 'react-icons/gr';

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 flex flex-col
                  bg-white dark:bg-gray-900 shadow-lg">
                    
        <SideBarIcon icon={<FaFire size="28" />}text={"fiyaaaaaaaaaaaaa"} />
        <Divider />
        <SideBarIcon icon={<BsPlus size="32" />}text={"plus"} />
        <SideBarIcon icon={<FaGamepad size="24" />}text={"OGPC '22"} />
        <SideBarIcon icon={<AiFillCreditCard size="20" />}text={"W3B Card"} />
        <Divider />
        <SideBarIcon icon={<FaLinkedin size="22" />} text={"my linkedin"} link={"https://www.youtube.com/"} />
        <SideBarIcon icon={<AiOutlineGithub size="30" />} text={"github"} link={"https://www.github.com/gitJamoo"} />
        <SideBarIcon icon={<AiOutlineTwitter size="30" />} text={"twitter"} link={"https://www.github.com/gitJamoo"} />
        <SideBarIcon icon={<GrInstagram size="26" />} text={"instagram"} link={"https://www.github.com/gitJamoo"} />
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
