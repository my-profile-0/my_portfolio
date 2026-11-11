import React, { ReactNode } from 'react';
import { motion, Variants } from 'motion/react';

// Smooth cubic-bezier curve that mimics iOS / Apple fluid momentum
export const SMOOTH_EASE = [0.16, 1, 0.3, 1] as const;

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
  scaleOffset?: number;
  staggerChildren?: number;
  once?: boolean;
  amount?: number | 'some' | 'all';
}

export const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: (custom: { stagger?: number; delay?: number } = {}) => ({
    opacity: 1,
    transition: {
      delayChildren: custom.delay ?? 0.04,
      staggerChildren: custom.stagger ?? 0.08,
    },
  }),
};

export const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: SMOOTH_EASE,
    },
  },
};

/**
 * Wraps content sections so they smoothly fade and slide up when scrolling into viewport.
 */
export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delay = 0,
  duration = 0.65,
  yOffset = 24,
  once = true,
  amount = 0.08,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount, margin: '0px 0px -40px 0px' }}
      transition={{
        duration,
        delay,
        ease: SMOOTH_EASE,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * Pure subtle fade-in with optional scale for high-end smoothness.
 */
export const FadeIn: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
  scaleOffset = 0.98,
  yOffset = 16,
  once = true,
  amount = 0.08,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset, scale: scaleOffset }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once, amount, margin: '0px 0px -30px 0px' }}
      transition={{
        duration,
        delay,
        ease: SMOOTH_EASE,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * Container that orchestrates staggered child animations on viewport entry.
 */
export const StaggerContainer: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delay = 0.04,
  staggerChildren = 0.08,
  once = true,
  amount = 0.08,
}) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount, margin: '0px 0px -40px 0px' }}
      custom={{ delay, stagger: staggerChildren }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * Child item designed to sit within a StaggerContainer for cascading fade + slide up.
 */
export const StaggerItem: React.FC<{
  children: ReactNode;
  className?: string;
}> = ({ children, className = '' }) => {
  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
};

