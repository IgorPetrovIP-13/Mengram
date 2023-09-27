import { createContext, useContext } from 'react';

export const FeedPostContext = createContext();

export function useContentContext() {
  return useContext(FeedPostContext);
}