import { motion } from "framer-motion";
import { MapPin, Calendar, Search } from "lucide-react";

const HomePage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
                {/* Abstract Background */}
                <div className="absolute inset-0 bg-zinc-950">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-zinc-950 to-zinc-950" />
                    <div className="absolute -top-1/2 -right-1/2 w-[1000px] h-[1000px] bg-blue-600/10 rounded-full blur-3xl opacity-50" />
                    <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-zinc-950 to-transparent z-10" />
                </div>

                <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-[-50px]">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                            The Premium Way to Travel
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">
                            Discover Your Next <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">
                                Adventure
                            </span>
                        </h1>
                        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
                            Book your bus tickets seamlessly. Experience luxury, safety, and comfort on every journey across the nation.
                        </p>
                    </motion.div>

                    {/* Search Widget */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl max-w-3xl mx-auto"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                            <div className="md:col-span-4 relative group">
                                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                                    <MapPin className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                                </div>
                                <input
                                    type="text"
                                    placeholder="From"
                                    className="w-full bg-zinc-900/50 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                                />
                            </div>

                            <div className="md:col-span-4 relative group">
                                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                                    <MapPin className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                                </div>
                                <input
                                    type="text"
                                    placeholder="To"
                                    className="w-full bg-zinc-900/50 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                                />
                            </div>

                            <div className="md:col-span-3 relative group">
                                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                                    <Calendar className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                                </div>
                                <input
                                    type="date"
                                    className="w-full bg-zinc-900/50 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all [color-scheme:dark]"
                                />
                            </div>

                            <div className="md:col-span-1">
                                <button className="w-full h-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl flex items-center justify-center transition-colors shadow-lg shadow-blue-600/25">
                                    <Search className="h-5 w-5" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Featured/Info Section Placeholder */}
            <section className="py-20 bg-zinc-950">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-12">Why Choose BusKu?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="p-8 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-blue-500/20 transition-all group">
                            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500/20 transition-colors">
                                <Bus className="w-6 h-6 text-blue-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">Premium Fleet</h3>
                            <p className="text-gray-400 text-sm">Top-tier buses with reclining seats, WiFi, and entertainment.</p>
                        </div>
                        {/* Feature 2 */}
                        <div className="p-8 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-blue-500/20 transition-all group">
                            <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-500/20 transition-colors">
                                <MapPin className="w-6 h-6 text-purple-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">Wide Coverage</h3>
                            <p className="text-gray-400 text-sm">Connecting thousands of destinations across the country.</p>
                        </div>
                        {/* Feature 3 */}
                        <div className="p-8 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-blue-500/20 transition-all group">
                            <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-500/20 transition-colors">
                                <Calendar className="w-6 h-6 text-green-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">Easy Booking</h3>
                            <p className="text-gray-400 text-sm">Book in seconds with our user-friendly app and website.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
