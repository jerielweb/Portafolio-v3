// components/Modal.tsx
"use client";
import { motion, AnimatePresence } from "framer-motion";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  title: string;
  children: React.ReactNode;
}

export default function Modal({ isOpen, setIsOpen, title, children }: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl overflow-hidden"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              ✕
            </button>

            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {title}
            </h3>

            <div className="text-gray-600">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}