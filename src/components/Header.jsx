import { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-orange-500 shadow-md">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-5 md:flex-row md:items-center md:justify-between md:px-8 md:py-5">
        <div className="flex items-center justify-between">
          <div>
            <img
              className="h-12 w-auto cursor-pointer"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"
              alt="Swiggy Logo"
            />
          </div>
          <button
            className="inline-flex items-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white transition hover:bg-white/20 md:hidden"
            onClick={() => setShowMenu((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            {showMenu ? "Close" : "Menu"}
          </button>
        </div>

        <div className={`flex flex-col gap-4 md:ml-auto md:flex-row md:items-center ${showMenu ? "block" : "hidden"} md:block`}>
          <nav>
            <ul className="flex flex-col gap-3 text-base font-medium text-white md:flex-row md:gap-8 md:items-center">
              <li className="cursor-pointer hover:text-orange-200 transition-colors duration-200">Home</li>
              <li className="cursor-pointer hover:text-orange-200 transition-colors duration-200">About</li>
              <li className="cursor-pointer hover:text-orange-200 transition-colors duration-200">Contact</li>
              <li className="cursor-pointer hover:text-orange-200 transition-colors duration-200">Cart</li>
            </ul>
          </nav>

          <button className="rounded-lg bg-white px-5 py-2 text-sm font-semibold text-orange-500 transition duration-300 hover:bg-gray-100 md:ml-6">
            Login
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;