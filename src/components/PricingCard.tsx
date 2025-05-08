
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';
import { CustomButton } from './ui/custom-button';

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  delay?: number;
}

export function PricingCard({
  title,
  price,
  description,
  features,
  highlighted = false,
  delay = 0
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        'glass-card p-6 flex flex-col',
        highlighted ? 'border-primary/50 shadow-glow' : ''
      )}
    >
      <div className="mb-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-400 text-sm mt-1">{description}</p>
      </div>
      
      <div className="mb-6">
        <span className="text-3xl font-bold">{price}</span>
        {price !== 'Custom' && <span className="text-gray-400 ml-1">/month</span>}
      </div>
      
      <ul className="mb-6 space-y-3 flex-grow">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start">
            <Check className="h-5 w-5 text-primary shrink-0 mr-2" />
            <span className="text-sm text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
      
      <CustomButton variant={highlighted ? "default" : "outline"} className="w-full">
        {highlighted ? 'Start Free Trial' : 'Get Started'}
      </CustomButton>
    </motion.div>
  );
}

export default PricingCard;
