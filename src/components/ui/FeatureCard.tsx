
import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color?: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  color = 'text-accent',
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className="bg-white dark:bg-black/20 border rounded-xl p-6 shadow-sm transition-all duration-300 hover:shadow-md"
    >
      <div className={`${color} bg-background inline-flex items-center justify-center p-2 rounded-lg mb-4`}>
        <Icon size={24} strokeWidth={1.5} />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;
