import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines Tailwind classes using clsx.
 * @param inputs - The Tailwind classes to combine.
 * @returns The combined Tailwind classes.
 */
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
