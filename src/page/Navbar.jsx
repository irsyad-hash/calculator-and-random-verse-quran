import { Link, NavLink } from "react-router-dom";

export default function Navbar() {

    return (
        <section>
        <div className="flex items-center justify-between bg-green-500 shadow-lg p-4">
            <div className="text-white">
                <NavLink 
                    to="/" 
                    className="text-2xl font-bold p-2 transition-colors duration-300 hover:text-green-300"
                >
                    Home
                </NavLink>
            </div>
            <div className="flex gap-6">
                <Link 
                    to="/calculator" 
                    className="text-2xl font-bold text-white p-2 transition-colors duration-300 hover:text-green-300"
                >
                    Calculator
                </Link>
                <NavLink 
                    to="/random" 
                    className="text-2xl font-bold text-white p-2 transition-colors duration-300 hover:text-green-300"
                >
                    Random
                </NavLink>
            </div>
        </div>
    </section>
    

    )


}