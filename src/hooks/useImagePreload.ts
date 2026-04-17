import { useEffect } from 'react';

/**
 * Hook to preload critical images for better performance
 * @param imageUrls - Array of image URLs to preload
 */
export const useImagePreload = (imageUrls: string[]) => {
  useEffect(() => {
    imageUrls.forEach((url) => {
      const img = new Image();
      img.src = url;
    });
  }, [imageUrls]);
};

/**
 * Hook to add link preload tags to document head
 * @param imageUrls - Array of image URLs to preload
 */
export const usePreloadLinks = (imageUrls: string[]) => {
  useEffect(() => {
    const links: HTMLLinkElement[] = [];
    
    imageUrls.forEach((url) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = url;
      document.head.appendChild(link);
      links.push(link);
    });

    // Cleanup: remove preload links on unmount
    return () => {
      links.forEach((link) => document.head.removeChild(link));
    };
  }, [imageUrls]);
};
