import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants/index";

const NavBar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <img src={appleImg} alt="Apple" className="cursor-pointer" width={14} height={18} />
        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((item, idx) => (
            <div key={idx} className="px-5 text-sm text-gray hover:text-white cursor-pointer transition-all">
              {item}
            </div>
          ))}
        </div>
        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <img src={searchImg} alt="search" className="cursor-pointer" height={18} width={18} />
          <img src={bagImg} alt="Bag" className="cursor-pointer" height={18} width={18} />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
