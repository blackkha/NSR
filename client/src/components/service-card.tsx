import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  index: number;
}

export function ServiceCard({ title, description, icon, index }: ServiceCardProps) {
  // Get the icon component dynamically
  const IconComponent = (LucideIcons as any)[icon.charAt(0).toUpperCase() + icon.slice(1).replace(/-./g, x => x[1].toUpperCase())] || LucideIcons.Activity;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <Card className="service-card h-full flex flex-col">
        <CardContent className="p-6 flex flex-col h-full">
          <div className="text-primary text-3xl mb-4">
            <IconComponent />
          </div>
          <h3 className="text-xl font-bold mb-3 service-title text-white">{title}</h3>
          <p className="text-gray-400 font-sans service-desc">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
