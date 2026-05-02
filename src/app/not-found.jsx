"use client";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-base-200 via-base-100 to-base-200 px-4">
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="backdrop-blur-lg bg-white/30 dark:bg-black/30 p-10 rounded-3xl shadow-2xl text-center max-w-lg w-full"
      >
        {/* Animated 404 */}
        <motion.h1
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-8xl font-extrabold text-primary mb-4"
        >
          404
        </motion.h1>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-3xl font-bold mb-2"
        >
          Oops! Page not found
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-500 mb-6"
        >
          The page you are looking for doesn’t exist or has been moved.
        </motion.p>

        {/* Floating Icon */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mb-6"
        >
          <Icon
            icon="mdi:book-open-page-variant-outline"
            className="text-7xl text-secondary mx-auto"
          />
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center gap-4"
        >
          <Link
            href="/"
            className="btn btn-primary hover:scale-105 transition-transform duration-300"
          >
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="btn btn-outline hover:scale-105 transition-transform duration-300"
          >
            Go Back
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}