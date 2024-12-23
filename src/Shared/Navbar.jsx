import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";

const Navbar = () => {
    const {user,logout}=useAuth();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
// console.log(user);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
  
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  const handleLogOut = () => {
    logout()
      .then(()=>{
        toast.success('Logout Success')
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

    return (
        <div className="navbar bg-base-100 fixed top-0 z-50 shadow-lg">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">NextGen Phones</a>
        </div>
        <div className="flex-none hidden lg:block">
          <ul className="menu menu-horizontal px-1">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Product</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="flex-none lg:hidden">
          <button onClick={toggleMenu} className="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>
        {isMenuOpen && (
          <div className="absolute top-16 right-0 w-full bg-base-100 lg:hidden shadow-lg z-40">
            <ul className="menu menu-vertical px-1">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Product</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        )}
        <div className="flex-none">
          <button onClick={toggleTheme} className="btn btn-square btn-ghost">
            {theme === 'dark' ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3a1 1 0 1 0 0 2 7 7 0 1 1-7 7 1 1 0 1 0-2 0 9 9 0 1 0 9-9z" /></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1zM4.22 5.22a1 1 0 0 0 0 1.42l1.42 1.42a1 1 0 1 0 1.42-1.42L5.64 5.22a1 1 0 0 0-1.42 0zm15.56 0a1 1 0 0 0-1.42 0l-1.42 1.42a1 1 0 1 0 1.42 1.42l1.42-1.42a1 1 0 0 0 0-1.42zM12 7a5 5 0 1 0 0 10 5 5 0 1 0 0-10zm-1 11v2a1 1 0 1 0 2 0v-2a1 1 0 1 0-2 0zM4.22 18.78a1 1 0 0 0 1.42 0l1.42-1.42a1 1 0 1 0-1.42-1.42l-1.42 1.42a1 1 0 0 0 0 1.42zm15.56 0a1 1 0 0 0 0-1.42l-1.42-1.42a1 1 0 1 0-1.42 1.42l1.42 1.42a1 1 0 0 0 1.42 0z" /></svg>
            )}
          </button>
          <div className="dropdown dropdown-end">

      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
              <div className="tooltip tooltip-bottom " data-tip={user?.displayName}>
              <img src={user?.photoURL || "https://i.pravatar.cc/150?img=3"} alt="User" />
               
              </div>
              </div>
            </label>
            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
            
              <li><Link to="/dashboard">DashBoard</Link></li>
              {user? <Link className="ml-4" onClick={handleLogOut}>LogOut</Link>
         : <Link to="/login" className="ml-4">Login</Link>}
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Navbar;