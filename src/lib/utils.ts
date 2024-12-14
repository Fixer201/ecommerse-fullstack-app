import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Функция для объединения классов с учетом конфликтов
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Объект с анимациями
export const animations = {
  slide:
    (
      direction: "up" | "down" | "left" | "right",
      durationMultiplier: number = 0.8
    ) =>
    (custom: number = 1) => ({
      hidden: {
        x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
        y: direction === "up" ? -100 : direction === "down" ? 100 : 0,
        opacity: 0,
      },
      visible: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          delay: custom * 0.2,
          duration: durationMultiplier,
        },
      },
      exit: {
        x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
        y: direction === "up" ? -100 : direction === "down" ? 100 : 0,
        opacity: 0,
        transition: {
          delay: custom * 0.2,
          duration: durationMultiplier,
        },
      },
    }),
  rotate: (delayMultiplier: number) => ({
    hidden: { y: -100, opacity: 0, rotate: 0 },
    visible: {
      y: 0,
      opacity: 1,
      rotate: 360,
      transition: {
        delay: delayMultiplier * 0.3,
        duration: 1,
      },
    },
  }),
};
