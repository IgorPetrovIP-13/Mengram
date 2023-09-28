import PropTypes from 'prop-types';
import styles from './FeedPost.module.scss';
import Comment from './Comment/Comment';
import { useEffect, useState, useMemo } from 'react';
import ContentWrapper from './ContentWrapper/ContentWrapper';
import { FeedPostContext } from './FeedPostContext';
import Like from './Icons/Like';
import { Comment as ShowComments } from './Icons/Comment';
import Save from './Icons/Save';
import ModalWrapper from '../ModalWrapper.js';

const FeedPost = ({ postLink }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [areCommentsOpened, setAreCommentsOpened] = useState(false);
  const [postContent, setPostContent] = useState({});
  const [postAuthor, setPostAuthor] = useState(null);
  const [commentAuthors, setCommentAuthors] = useState({});

//   const postAuthor = useMemo(() => {
//     const fetchAuthorData = async () => {
//       const authorId = postContent.authorId;
//       const response = await fetch('./users.json');
//       if (response.ok) {
//         const authorData = await response.json();
//         return authorData.find((author) => author.id === authorId);
//       }
//       return null;
//     };
//     return fetchAuthorData();
//   }, [postContent]);

//   const CommentAuthors = useMemo(() => {
//     const allComments = postContent.comments || [];
//     const updatedAuthors = { ...commentAuthors };

//     allComments.forEach((comment) => {
//       const authorId = comment.authorId;
//       if (!updatedAuthors[authorId]) {
//         updatedAuthors[authorId] = {
//           id: authorId,
//           comments: [],
//         };
//       }
//       updatedAuthors[authorId].comments.push(comment);
//     });

//     setCommentAuthors(updatedAuthors);
//   }, [postContent, commentAuthors]);

  useEffect(() => {
    fetchData()
    .then(async () => {
      await fetchComments();
      await fetchAuthor();
    })
    .catch((error) => {
      console.error(error);
    });
  }, [postLink]);

  async function fetchComments() {

  }

  async function fetchAuthor() {
    
  }

  async function fetchData() {
    const response = await fetch(postLink);
        if (response.ok) {
            const data = await response.json();
            setPostContent(data[0]);
        }
  }

  function toggleLike() {
    setIsLiked((prev) => !prev);
  }

  function toggleSave() {
    setIsSaved((prev) => !prev);
  }

  function toggleComments() {
    setAreCommentsOpened((prev) => !prev);
  }

  return (
    <FeedPostContext.Provider value={{ postContent }}>
      <>
        <article className={styles.postWrapper}>
          <ContentWrapper setLike={setIsLiked} />
          <div className={styles.actionsWrapper}>
            <div className={styles.mainActions}>
              <button
                onClick={toggleLike}
                className={styles.actionButton}
              >
                <Like fill={isLiked ? 'red' : 'black'} />
              </button>
              <button
                onClick={toggleComments}
                className={styles.actionButton}
              >
                <ShowComments fill={'black'} />
              </button>
            </div>
            <button
              onClick={toggleSave}
              className={styles.actionButton}
            >
              <Save fill={isSaved ? '#008ce7' : 'black'} />
            </button>
          </div>
          <span
           className={styles.title}>
            <strong>{postAuthor ? postAuthor.username : 'Загрузка...'}</strong>{postContent.title}
          </span>
          <Comment
            submitFunc={(text) => {
              console.log(text);
            }}
          />
          <hr className={styles.hr} />
        </article>
        {areCommentsOpened && (
          <ModalWrapper closeFunc={toggleComments}></ModalWrapper>
        )}
      </>
    </FeedPostContext.Provider>
  );
};

FeedPost.propTypes = {
  postLink: PropTypes.string,
};

export default FeedPost;