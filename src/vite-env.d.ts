/// <reference types="vite/client" />

interface Window {
  webkit?: {
    messageHandlers?: {
      talkmateApp?: {
        postMessage: (message: string) => void;
      };
    };
  };
}
