import React, { useRef, useEffect, ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type RotatingCardProps = {
  title: string;
  description: string;
  icon?: ReactNode;
  MDivClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

const RotatingCard: React.FC<RotatingCardProps> = ({
  title,
  description,
  icon,
  MDivClassName,
  titleClassName,
  descriptionClassName,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width;
      const y = e.clientY - rect.top - rect.height;
      const rotateX = (y / rect.height) * 30;
      const rotateY = (x / rect.width) * -30;

      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = () => {
      if (card) card.style.transform = "rotateX(0) rotateY(0)";
    };

    card?.addEventListener("mousemove", handleMouseMove);
    card?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card?.removeEventListener("mousemove", handleMouseMove);
      card?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <motion.div
      ref={cardRef}
      whileHover={{ scale: 1.1 }}
      className={cn(
        "flex flex-col relative w-full h-full justify-center items-center bg-red-800 text-white border [transform-style:preserve-3d] border-red-800 rounded-xl p-4 font-bold gap-6 transition-all duration-75 ease-in-out mb-8",
        MDivClassName
      )}
    >
      {icon}
      <p className={titleClassName}>{title}</p>
      <p className={(cn("not-italic text-white"), descriptionClassName)}>
        {description}
      </p>
    </motion.div>
  );
};

export default RotatingCard;
