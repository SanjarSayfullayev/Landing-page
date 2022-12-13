import React, {useState} from 'react';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
 
const Navbar = () => {
    const [nav, setNav] = useState(true)
    const handClick = () => setNav(!nav)
    return (
      <div className="flex justify-between items-center max-w-[1240px] m-auto h-[64px]">
        <h3 className="text-pink-900 w-full text-4xl font-bold">Sancho.zdes</h3>
        <ul className="text-white hidden md:flex">
          <li className="p-4">Home</li>
          <li className="p-4">Company</li>
          <li className="p-4">Resources</li>
          <li className="p-4">About</li>
          <li className="p-4">Contact</li>
        </ul>
        <div onClick={handClick} className="text-white md:hidden  mr-6">
          {nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
        </div>
        <div
          className={
            !nav
              ? "text-white fixed left-0 top-0 h-full w-[60%] bg-[#003]"
              : "fixed left-[-100%]"
          }
        >
          <h3 className="text-[#00df9a] font-bold m-4 w-full text-4xl">
            Sancho.zdes
          </h3>
          <ul className="uppercase p-4">
            <li className="p-4 border-b border-gray-600">Home</li>
            <li className="p-4 border-b border-gray-600">Company</li>
            <li className="p-4 border-b border-gray-600">Resources</li>
            <li className="p-4 border-b border-gray-600">About</li>
            <li className="p-4 border-b border-gray-600">Contact</li>
          </ul>
        </div>
      </div>
    );
}

export default Navbar;
