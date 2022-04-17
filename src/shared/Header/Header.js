import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className="text-gray-600 body-font bg-green-700">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <Link className = "flex title-font text-2xl font-medium items-center text-white mb-4 md:mb-0 cursor-pointer" to="/home" >
            Nutrtion by Ameera
            </Link>
            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <NavLink style={({ isActive }) => isActive ? {color: 'yellow'} : undefined} className = "mr-5 text-white text-xl  hover:text-yellow-200 cursor-pointer" to="/"> Home </NavLink>
            <NavLink style={({ isActive }) => isActive ? {color: 'yellow'} : undefined} className = "mr-5 text-white text-xl hover:text-yellow-200 cursor-pointer" to="/blog"> Blogs </NavLink>
            <NavLink style={({ isActive }) => isActive ? {color: 'yellow'} : undefined} className = "mr-5 text-white text-xl hover:text-yellow-200 cursor-pointer" to="/about"> About Me </NavLink>
            </nav>
            <NavLink style={({ isActive }) => isActive ? {color: 'red'} : undefined} className = "inline-flex items-center text-xl bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 cursor-pointer" to="/login"> Login
            </NavLink>
        </div>
    </header>
    );
};

export default Header;