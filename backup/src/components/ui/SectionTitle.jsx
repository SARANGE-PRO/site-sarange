import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({ children, subtitle, dark = false }) => (
  <div className="mb-12 text-center max-w-3xl mx-auto px-4">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`text-3xl md:text-5xl font-bold mb-4 ${dark ? 'text-white' : 'text-secondary-900'}`}
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className={`text-lg md:text-xl ${dark ? 'text-secondary-300' : 'text-secondary-600'}`}
      >
        {subtitle}
      </motion.p>
    )}
    <div
      className={`h-1.5 w-24 mx-auto mt-6 rounded-full ${dark ? 'bg-primary-500' : 'bg-accent-600'}`}
    ></div>
  </div>
);

export default SectionTitle;
