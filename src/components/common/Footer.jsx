import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-zinc-950 border-t border-white/10 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-2xl font-bold text-white">BusKu</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Your premium bus booking companion. Travel with comfort and style across the country.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="#" className="text-gray-400 hover:text-blue-500 transition-colors">About Us</Link></li>
                            <li><Link to="#" className="text-gray-400 hover:text-blue-500 transition-colors">Contact</Link></li>
                            <li><Link to="#" className="text-gray-400 hover:text-blue-500 transition-colors">Careers</Link></li>
                            <li><Link to="#" className="text-gray-400 hover:text-blue-500 transition-colors">Blog</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Support</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="#" className="text-gray-400 hover:text-blue-500 transition-colors">Help Center</Link></li>
                            <li><Link to="#" className="text-gray-400 hover:text-blue-500 transition-colors">Terms of Service</Link></li>
                            <li><Link to="#" className="text-gray-400 hover:text-blue-500 transition-colors">Privacy Policy</Link></li>
                            <li><Link to="#" className="text-gray-400 hover:text-blue-500 transition-colors">FAQs</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Newsletter</h3>
                        <p className="text-gray-400 text-sm mb-4">Subscribe to our newsletter for the latest updates.</p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2 text-sm text-white w-full focus:outline-none focus:border-blue-600 transition-colors"
                            />
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">© 2024 BusKu. All rights reserved.</p>
                    <div className="flex items-center gap-4">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
