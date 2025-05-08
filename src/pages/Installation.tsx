
import { motion } from "framer-motion";
import { CustomButton } from "@/components/ui/custom-button";
import { ArrowRight, Download, Settings } from "lucide-react";
import Navigation from "@/components/Navigation";

const Installation = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const steps = [
    {
      id: 1,
      title: "Download the PropertyPulse App",
      description:
        "Get started by downloading our application from the App Store or Google Play Store. Alternatively, you can download directly from our website.",
      icon: <Download className="h-8 w-8 text-primary" />,
    },
    {
      id: 2,
      title: "Sign Up and Configure Your Account",
      description:
        "Create your account with a few simple steps. Customize your profile and preferences to suit your property management needs.",
      icon: <Settings className="h-8 w-8 text-primary" />,
    },
    {
      id: 3,
      title: "Connect Your Properties",
      description:
        "Link your existing properties to the platform. Import property details or add them manually to get a complete overview.",
      icon: <ArrowRight className="h-8 w-8 text-primary" />,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <div className="container mx-auto pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Installation Guide
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Follow these simple steps to get PropertyPulse up and running on your devices
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {steps.map((step) => (
            <motion.div 
              key={step.id}
              variants={itemVariants}
              className="glass-card p-8 rounded-xl flex flex-col items-center text-center"
            >
              <div className="mb-4 rounded-full bg-accent p-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">
                {step.title}
              </h3>
              <p className="text-gray-400">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="glass-card p-8 max-w-3xl mx-auto rounded-xl"
        >
          <h2 className="text-2xl font-bold mb-6">System Requirements</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold mb-3 text-primary">Mobile App</h3>
              <ul className="space-y-2 text-gray-400">
                <li>• iOS 12.0 or later</li>
                <li>• Android 8.0 or later</li>
                <li>• 100MB free storage space</li>
                <li>• Camera access for property scanning</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-3 text-primary">Web Platform</h3>
              <ul className="space-y-2 text-gray-400">
                <li>• Chrome, Firefox, Safari, or Edge</li>
                <li>• JavaScript enabled</li>
                <li>• Minimum 1024x768 screen resolution</li>
                <li>• Stable internet connection</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <CustomButton variant="default">
              Download Now
            </CustomButton>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Installation;
