import { Link } from "react-router-dom";
import { Bus, User, Menu } from "lucide-react";
import { useState } from "react";
import { cn } from "../../lib/utils";
import { motion } from "framer-motion";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    // Add scroll listener effect here if needed for dynamic styling
    // For now, we'll keep it simple but premium

    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-md supports-[backdrop-filter]:bg-black/20">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2">
                    <div className="bg-blue-600 p-1.5 rounded-lg">
                        <Bus className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                        BusKu
                    </span>
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    {["Home", "Bus Tickets", "My Booking", "Help"].map((item) => (
                        <Link
                            key={item}
                            to="/"
                            className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                        >
                            {item}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <button className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-full transition-all shadow-lg shadow-blue-500/20">
                        <User className="w-4 h-4" />
                        Sign In
                    </button>
                    <button className="md:hidden p-2 text-gray-300 hover:text-white">
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
