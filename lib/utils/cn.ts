import { clsx, type ClassValue } from "clsx";

  /**
   * Combines conditional class names. Kept intentionally small since class
 * conflicts are minimal at this stage of the project.
   */
  export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
