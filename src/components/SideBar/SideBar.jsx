import React from 'react';
import './SideBar.css';
import { BiHome, 
        BiBookAlt, 
        BiMessage,
        BiSolidReport,
        BiStats,
        BiTask,
        BiMessageAlt,
        BiHelpCircle
} from 'react-icons/bi';

const SideBar = () => {
  return (
    <div className='menu'>
        <div className="logo">
            <BiBookAlt className="logo-icon" />
            <h2>EduFlex</h2>
        </div>
        <div className="menu--list">
            <a href="" className="item active">
                <BiHome className="icon" />
                Dashboard
            </a>
            <a href="" className="item">
                <BiTask className="icon" />
                Assignment
            </a>
            <a href="" className="item">
                <BiSolidReport className="icon" />
                Reports
            </a>
            <a href="" className="item">
                <BiStats className="icon" />
                Stats
            </a>
            <a href="" className="item">
                <BiMessageAlt className="icon" />
                Message
            </a>
            <a href="" className="item">
                <BiHelpCircle className="icon" />
                Help
            </a>
        </div>
    </div>
  );
};

export default SideBar;
