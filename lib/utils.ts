import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const capitalize = (text = '') =>
  text.trim().charAt(0).toUpperCase() + text.trim().slice(1).toLowerCase();
