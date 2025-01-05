import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Code2, LogOut, User } from 'lucide-react';
import { AuthModal } from './auth/AuthModal';
import { transitionClasses } from '../utils/transitions';
import { useAuthContext } from '../contexts/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';

export const Header = () => {
  const navigate = useNavigate();
  const { user, signOut } = useAuthContext();
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut();
      setShowProfileMenu(false);
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0B0F19]/80 backdrop-blur-xl' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg p-1.5">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">OpenSourceHub</span>
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              <NavLink to="/" label="Home" />
              <NavLink to="/projects" label="Projects" />
              <NavLink to="/issues" label="Issues" />
              <NavLink to="/request" label="Request" />
              {user && <NavLink to="/profile" label="Profile" />}
              <NavLink to="/community" label="Community" />
            </div>

            {/* Auth Buttons or Profile */}
            <div className="flex items-center gap-4">
              {user ? (
                <div className="relative">
                  <button
                    onClick={() => setShowProfileMenu(!showProfileMenu)}
                    className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-purple-500/20 hover:ring-purple-500/40 transition-all duration-300 transform hover:scale-105"
                  >
                    <img
                      src={user.user_metadata.avatar_url || `https://api.dicebear.com/7.x/avatars/svg?seed=${user.id}`}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </button>

                  <AnimatePresence>
                    {showProfileMenu && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute right-0 mt-2 w-48 py-2 bg-[#0D1117]/90 backdrop-blur-xl rounded-xl shadow-xl border border-gray-800/50"
                      >
                        <div className="px-4 py-2 border-b border-gray-800/50">
                          <p className="text-sm text-gray-400">Signed in as</p>
                          <p className="text-sm font-medium text-white truncate">{user.email}</p>
                        </div>
                        <button
                          onClick={() => {
                            navigate('/profile');
                            setShowProfileMenu(false);
                          }}
                          className="flex items-center gap-2 w-full px-4 py-2 text-gray-300 hover:text-white hover:bg-white/5"
                        >
                          <User className="w-4 h-4" />
                          Profile
                        </button>
                        <button
                          onClick={handleSignOut}
                          className="flex items-center gap-2 w-full px-4 py-2 text-gray-300 hover:text-white hover:bg-white/5"
                        >
                          <LogOut className="w-4 h-4" />
                          Sign Out
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <>
                  <button
                    onClick={() => setShowSignIn(true)}
                    className={`px-6 py-2 bg-white/10 backdrop-blur-lg rounded-full text-white font-medium ${transitionClasses.hover.scale}`}
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => setShowSignUp(true)}
                    className={`px-6 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full text-white font-medium ${transitionClasses.hover.scale}`}
                  >
                    Get Started
                  </button>
                </>
              )}
            </div>
          </nav>
        </div>
      </header>

      {/* Auth Modals */}
      <AuthModal
        isOpen={showSignIn}
        onClose={() => setShowSignIn(false)}
        type="signin"
      />
      <AuthModal
        isOpen={showSignUp}
        onClose={() => setShowSignUp(false)}
        type="signup"
      />
    </>
  );
};

const NavLink = ({ to, label }: { to: string; label: string }) => (
  <Link 
    to={to}
    className="text-gray-300 hover:text-white transition-colors"
  >
    {label}
  </Link>
);