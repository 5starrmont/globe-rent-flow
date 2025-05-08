
import React from 'react';
import { motion } from 'framer-motion';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  company: string;
  country: string;
  delay?: number;
}

export function TestimonialCard({
  quote,
  name,
  role,
  company,
  country,
  delay = 0
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="glass-card p-6"
    >
      <div className="mb-4">
        <svg className="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.039 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
        </svg>
      </div>
      <p className="text-gray-300 mb-4 italic">{quote}</p>
      <div className="flex items-center justify-between">
        <div>
          <p className="font-medium">{name}</p>
          <p className="text-gray-400 text-sm">{role}, {company}</p>
        </div>
        <div className="text-sm text-gray-400">{country}</div>
      </div>
    </motion.div>
  );
}

export default TestimonialCard;
