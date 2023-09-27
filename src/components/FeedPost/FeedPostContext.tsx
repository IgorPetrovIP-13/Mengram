import { createContext, useContext } from 'react';

interface FeedPostContextType {
  postContent: {
    media: string;
    comments: object[];
  };
}

export const FeedPostContext = createContext<FeedPostContextType | undefined>(undefined);

export function useContentContext() {
  const context = useContext(FeedPostContext);
  if (context === undefined) {
    throw new Error('useContentContext must be used within a FeedPostContextProvider');
  }
  return context;
}