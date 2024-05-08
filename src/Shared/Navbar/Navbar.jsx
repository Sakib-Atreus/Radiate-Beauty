import { FaSearch } from "react-icons/fa";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { BsHandbag } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 text-[#000000]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-Poppins text-md font-medium"
          >
            <li>
              <a className="underline underline-offset-4">Products</a> 
            </li>
            <li>
              <a>Story</a>
            </li>
            <li>
              <a>Manufacturing</a>
            </li>
            <li>
              <a>About Us</a>
            </li>
            <li>
              <a>Team</a>
            </li>
          </ul>
        </div>
        <a href="/" className="text-xl font-semibold font-Vidaloka ">Asad Ali</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-Poppins text-md font-medium">
          <li className="flex flex-col">
            <a className="underline underline-offset-4">Products</a>         
          </li>
          <li>
            <a>Story</a>
          </li>
          <li>
            <a>Manufacturing</a>
          </li>
          <li>
            <a>About Us</a>
          </li>
          <li>
            <a>Team</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-4 font-semibold">
        <FaSearch />
        <p className="mb-4 -me-3">EN</p>
        <MdOutlineArrowDropDown />
        <BsHandbag className="text-xl"/><p className="bg-red-500 text-white text-[8px] font-light w-3 h-3 text-center rounded-full -ms-5 mb-2">2</p>
        <CgProfile className="text-xl"/>
        <a href="#" className="">Log out</a>
      </div>
    </div>
  );
};

export default Navbar;
