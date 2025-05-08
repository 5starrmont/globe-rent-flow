
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { CustomButton } from "@/components/ui/custom-button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="glass-card p-8 max-w-md w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-6xl font-bold mb-4 text-gradient">404</h1>
          <p className="text-xl text-gray-300 mb-6">Page not found</p>
          <p className="mb-8 text-gray-400">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <CustomButton variant="default">
            <a href="/">Return to Home</a>
          </CustomButton>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
