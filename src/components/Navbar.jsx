import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const { user, setShowLogin, logout, credit } = useContext(AppContext);
  // const [user,setUser] = useState(true)

  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between py-4 ">
 <Link to="/">
<h2 className="text-4xl font-extrabold cursor-pointer select-none hover:scale-105 transition duration-300">
<span className="bg-gradient-to-r from-sky-500 to-pink-400 bg-clip-text text-transparent">
  Vision.Ai
</span>
</h2>



</Link>


      <div>
        {user ? (
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => navigate("/buy")}
              className="flex items-center gap-2 bg-blue-100 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-700"
            >
              <img className="w-5" src={assets.credit_star} alt="credit star" />
              <p className="text-sm sm:text-sm font-medium text-gray-600">
                Credits left : {credit}
              </p>
            </button>
            <p className="text-gray-600 max-sm:hidden pl-4">Hi, {user.name}</p>
            <div className="relative group">
              <img
                src={assets.profile_icon}
                className="w-10 drop-shadow"
                alt=""
              />
            <div className="absolute hidden group-hover:block top-0 right-0 z-10 text-black pt-12">
  <ul className="m-0 p-2 w-32 bg-white rounded-lg shadow-lg border border-gray-200 text-sm">
    <li
      onClick={logout}
      className="py-2 px-4 cursor-pointer hover:bg-gray-100 rounded-md transition-colors"
    >
      Logout
    </li>
  </ul>
</div>

            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2 sm:gap-5 ">
            <p onClick={() => navigate("/buy")} className="cursor-pointer">
              Pricing
            </p>
            <button
              onClick={() => setShowLogin(true)}
              className="bg-zinc-800 text-white px-7 py-2 sm:px-10 text-sm rounded-full"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
