import { QueryClient } from '@tanstack/react-query';

export const queryClientInstance = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

//import { clsx } from "clsx"
//'import { twMerge } from "tailwind-merge"

//export function cn(...inputs) {
//  return twMerge(clsx(inputs))
//} 


//export const isIframe = window.self !== window.top;
