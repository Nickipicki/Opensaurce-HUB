import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { AuthForm } from './AuthForm';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'signin' | 'signup';
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, type }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        />

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="relative bg-[#0D1117]/90 backdrop-blur-xl w-full max-w-md rounded-2xl shadow-2xl overflow-hidden"
        >
          {/* Purple gradient glow */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[500px] h-[500px] opacity-20">
              <div className="absolute inset-0 rounded-full bg-purple-500 blur-[100px]" />
            </div>
          </div>

          <div className="relative p-8">
            <button
              onClick={onClose}
              className="absolute right-4 top-4 p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/50 transition-colors"
            >
              <X className="w-4 h-4 text-gray-400" />
            </button>

            <h2 className="text-2xl font-bold text-white mb-6">
              {type === 'signin' ? 'Welcome Back' : 'Get Started'}
            </h2>

            <AuthForm type={type} onSuccess={onClose} />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};