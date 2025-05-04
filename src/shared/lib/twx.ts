import clsx, { type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export const twx = (...inputs: ClassValue[]) => {
	return twMerge(clsx(inputs))
}
