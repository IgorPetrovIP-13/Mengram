import React, { useState } from 'react'
import styles from './ContentWrapper.module.scss'
import Like from '../Icons/Like'
import { useContentContext } from '../FeedPostContext'

interface ContentWrapperProps {
  setLike: (like: boolean) => void;
}

const ContentWrapper: React.FC<ContentWrapperProps> = ({ setLike }) => {
  const contentContext = useContentContext();
  const mediaLink = contentContext.postContent.media || '';
  const [isAnimationActive, setIsAnimationActive] = useState(false);

  function handleDoubleClick() {
    setLike(true);
    setIsAnimationActive(true);
    setTimeout(() => {
      setIsAnimationActive(false);
    }, 1000);
  }

  return (
    <div
      onDoubleClick={handleDoubleClick}
      className={`${styles.contentWrapper} ${isAnimationActive ? styles.liked : ''}`}
    >
      <img src={mediaLink} alt="Media" />
      <Like fill={'white'} />
    </div>
  );
};

export default ContentWrapper