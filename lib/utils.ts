import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const capitalize = (text = '') =>
  text.trim().charAt(0).toUpperCase() + text.trim().slice(1).toLowerCase();

export const getFillColor = (step: number, theme?: string) => {
  return theme === 'dark'
    ? `rgba(255, 255, 255, ${(step == 0 ? 10 : step) / 100})`
    : `rgba(0, 0, 0, ${(step == 0 ? 10 : step) / 100})`;
};

export const filePath = 'data/state.json';
