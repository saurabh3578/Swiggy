const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-10">
      <div className="mx-auto max-w-7xl px-6 py-8 sm:px-8 md:py-10">
        <div className="flex flex-col items-center gap-8 border-b border-gray-800 pb-8 md:flex-row md:justify-between md:items-start md:border-none md:pb-0">
          <div className="text-center md:text-left">
            <img
              className="mx-auto h-12 w-auto cursor-pointer md:mx-0"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"
              alt="Swiggy Logo"
            />
          </div>

          <ul className="flex flex-wrap justify-center gap-4 text-sm text-gray-300 md:justify-end">
            <li className="hover:text-orange-500 cursor-pointer transition">Home</li>
            <li className="hover:text-orange-500 cursor-pointer transition">About</li>
            <li className="hover:text-orange-500 cursor-pointer transition">Contact</li>
            <li className="hover:text-orange-500 cursor-pointer transition">Privacy Policy</li>
          </ul>
        </div>

        <div className="pt-6 text-center text-sm text-gray-400 md:text-left">
          © {new Date().getFullYear()} Swiggy. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;