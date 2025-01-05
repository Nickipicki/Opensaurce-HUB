import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Step } from './Step';
import { StepIndicator } from './StepIndicator';
import { steps } from './data';

export const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="relative py-32 overflow-hidden">
      {/* Background Glow */}
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-purple-900/10 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-30">
          <div className="absolute inset-0 rounded-full bg-purple-500 blur-[100px]" />
        </div>
      </motion.div>
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Join the open source community and start contributing in three simple steps
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          <AnimatePresence mode="wait">
            {steps.map((step, index) => (
              <Step
                key={step.number}
                {...step}
                isActive={index === activeStep}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* Interactive Navigation */}
        <div className="mt-12 flex flex-col items-center gap-6">
          <div className="flex items-center gap-4">
            {steps.map((_, index) => (
              <StepIndicator
                key={index}
                index={index}
                isActive={index === activeStep}
                onClick={() => setActiveStep(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};