import { motion } from 'framer-motion';
import { Home, User, Settings, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { icon: Home, label: 'Home', href: '/' },
    { icon: User, label: 'About', href: '/about' },
    { icon: Settings, label: 'Settings', href: '/settings' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background blur elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-50 p-4"
      >
        <div className="max-w-7xl mx-auto">
          <div className="backdrop-blur-md bg-white/10 rounded-2xl border border-white/20 shadow-xl">
            <div className="px-6 py-4">
              <div className="flex items-center justify-between">
                {/* Logo */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-2xl font-bold text-white"
                >
                  Glassmorphism
                </motion.div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-2 px-4 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300"
                    >
                      <item.icon size={18} />
                      <span>{item.label}</span>
                    </motion.a>
                  ))}
                </div>

                {/* Mobile menu button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={toggleMenu}
                  className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors duration-200"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.button>
              </div>

              {/* Mobile Navigation */}
              <motion.div
                initial={false}
                animate={{ height: isMenuOpen ? 'auto' : 0, opacity: isMenuOpen ? 1 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="md:hidden overflow-hidden"
              >
                <div className="pt-4 pb-2 border-t border-white/20 mt-4">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : -20 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 4 }}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center space-x-3 px-4 py-3 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300"
                    >
                      <item.icon size={18} />
                      <span>{item.label}</span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <main className="relative z-10 flex-1">
        {children}
      </main>

      {/* Footer */}
      <motion.footer
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="relative z-50 p-4 mt-16"
      >
        <div className="max-w-7xl mx-auto">
          <div className="backdrop-blur-md bg-white/5 rounded-2xl border border-white/10 shadow-xl">
            <div className="px-6 py-4 text-center">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-white/60 text-sm"
              >
                © 2024 Glassmorphism Hello Ismail. Crafted with ❤️ and modern web technologies.
              </motion.p>
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Layout;