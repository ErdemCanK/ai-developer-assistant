
import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface PersonaCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

const PersonaCard: React.FC<PersonaCardProps> = ({
  icon: Icon,
  title,
  description,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      viewport={{ once: true }}
      className="min-w-[280px] h-[300px] flex-shrink-0 rounded-xl border bg-white dark:bg-black/20 shadow-sm p-6 flex flex-col"
    >
      <div className="mb-4 text-accent">
        <Icon size={28} strokeWidth={1.5} />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground flex-grow">{description}</p>
    </motion.div>
  );
};

export default PersonaCard;
