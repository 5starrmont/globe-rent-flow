
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TabProps {
  label: string;
  content: React.ReactNode;
  icon: React.ReactNode;
}

export function UserPortalPreview({ tabs }: { tabs: TabProps[] }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="glass-card p-6 relative">
      <div className="flex space-x-6 mb-6">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(i)}
            className={cn(
              "flex items-center space-x-2 p-2 rounded-md transition-colors",
              activeTab === i 
                ? "text-white bg-primary/20" 
                : "text-gray-400 hover:text-white"
            )}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>
      
      <div className="relative overflow-hidden rounded-lg">
        {tabs.map((tab, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 20 }}
            animate={{
              opacity: activeTab === i ? 1 : 0,
              x: activeTab === i ? 0 : 20,
              display: activeTab === i ? 'block' : 'none'
            }}
            transition={{ duration: 0.3 }}
            className="bg-muted/50 rounded-lg p-4"
          >
            {tab.content}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default UserPortalPreview;
