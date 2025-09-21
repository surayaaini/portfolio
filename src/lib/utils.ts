import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Merge tailwind + conditional classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
