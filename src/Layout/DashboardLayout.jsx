import { TbJewishStar } from "react-icons/tb";
import { useState } from 'react';
import { FaHome, FaMobileAlt, FaUsers,FaCog } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import useSeller from '../hooks/useSeller';
import useAdmin from '../hooks/useAdmin';

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isSeller] = useSeller();
  const [isAdmin] = useAdmin();
  
  // if(isLoading || isSellerLoading){
  //   return <div className="flex md:mt-64 items-center justify-center ">
  //     <div className="radial-progress animate-spin" style={{"--value":70}}>70%</div>
  //   </div>
  // }
  return (
    <div className="flex h-screen bg-gray-100">
       
       {/* Sidebar  */}
      <aside className={`fixed inset-y-0 left-0 z-30 w-40 bg-indigo-50 shadow-md p-6 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out md:relative md:w-64 lg:w-72 xl:w-80`}>
        <div className="text-2xl font-bold text-indigo-600 mb-10 hidden md:block">NextGen Phones</div>
        <nav>
          <ul>
            <li className="mb-6">
            <div className="block md:hidden">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-gray-700 focus:outline-none focus:text-indigo-600">
              <FaCog size={24} />
            </button>
          </div>
            </li>
            <li className="mb-6">
              <Link to="/dashboard" className="flex items-center space-x-4 text-gray-700 hover:text-indigo-600">
                <FaHome />
                <span>Dashboard</span>
              </Link>
            </li>
            {/* admin route */}
      {isAdmin && (
        <>
            <li className="mb-6">
              <Link to="/dashboard/manageUser" className="flex items-center space-x-4 text-gray-700 hover:text-indigo-600">
                <FaUsers />
                <span>Manage User</span>
              </Link>
            </li>
      </>)}
      {/* seller route */}
           {isSeller && (
            <>
             <li className="mb-6">
              <Link to="/dashboard/addProducts" className="flex items-center space-x-4 text-gray-700 hover:text-indigo-600">
                <FaMobileAlt />
                <span>Add Products</span>
              </Link>
            </li>
            <li className="mb-6">
              <Link to="/dashboard/allProducts" className="flex items-center space-x-4 text-gray-700 hover:text-indigo-600">
                <FaMobileAlt />
                <span>All Products</span>
              </Link>
            </li>
            <li className="mb-6">
              <Link to="/settings" className="flex items-center space-x-4 text-gray-700 hover:text-indigo-600">
                <FaCog />
                <span>Manage Product</span>
              </Link>
            </li>
            </>
           )}
           {/* buyer route */}
           {isSeller && (
            <>
             <li className="mb-6">
              <Link to="/products" className="flex items-center space-x-4 text-gray-700 hover:text-indigo-600">
                <FaMobileAlt />
                <span>Products</span>
              </Link>
            </li>
            <li className="mb-6">
              <Link to="/wishList" className="flex items-center space-x-4 text-gray-700 hover:text-indigo-600">
              <TbJewishStar />
                <span>Wish List</span>
              </Link>
            </li>
            </>
           )}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 bg-white shadow-md flex items-center justify-between px-6">
          <div className="block md:hidden">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-gray-700 focus:outline-none focus:text-indigo-600">
              <FaCog size={24} />
            </button>
          </div>
          <h2 className="text-2xl text-gray-700 font-semibold">Dashboard</h2>
          <div className="hidden md:block">
            <span className="text-gray-700">Welcome, Admin</span>
          </div>
        </header>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-4 sm:p-6 md:p-8 lg:p-10">
          <Outlet></Outlet>
        </main>
      </div>
    </div>
  );
};


export default DashboardLayout;
