import Like from "../Icons/Like.js";
import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import styles from './ContentWrapper.module.scss';
import {useContentContext} from '../FeedPostContext';

const ContentWrapper = ({setLike}) => {

    const contentContext = useContentContext();
    const mediaLink = contentContext.postContent.media || '';
    const [isAnimationActive, setIsAnimationActive] = useState(false);

    function handleDoubleClick () {
        setLike(true);
        setIsAnimationActive(true);
        setTimeout(() => {
            setIsAnimationActive(false);
        }, 1000)
    }

    return (
        <div
            onDoubleClick={handleDoubleClick} 
            className={`${styles.contentWrapper} ${isAnimationActive ? styles.liked : ''}`}
        >
            <img src={mediaLink}/>
            <Like
                fill={'white'}
            />
        </div>
    )
}

ContentWrapper.propTypes = {
    setLike: PropTypes.func.isRequired
}

export default ContentWrapper;