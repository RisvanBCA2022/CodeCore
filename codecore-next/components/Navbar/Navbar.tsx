import Authprofilemenu from "./Authprofilemenu";

const Navbar = () => {
  return (
    <nav className="bg-green-500 p-4 shadow-md">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="text-3xl font-bold text-white hover:text-green-200 cursor-pointer">
          <span>Home</span>
        </div>
        <div className="flex items-center space-x-8 mt-4 lg:mt-0">
          <span className="text-xl text-white hover:text-green-200 cursor-pointer">
            About
          </span>
          <span className="text-xl text-white hover:text-green-200 cursor-pointer">
            Products
          </span>
          <span className="text-xl text-white hover:text-green-200 cursor-pointer">
            For Teams
          </span>
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="rounded-full p-2 pl-8 bg-gray-200 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <span className="absolute top-2 left-4 text-gray-500">
              🔍
            </span>
            
          </div>
          <Authprofilemenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
