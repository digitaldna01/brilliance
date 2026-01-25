import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Tailwind 클래스를 조건부로 병합하는 유틸리티
 * clsx로 조건부 클래스를 처리하고, twMerge로 중복 제거
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
