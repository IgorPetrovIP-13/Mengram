import styles from './FeedPost.module.scss'
import Comment from './Comment/Comment'
import { useEffect, useState} from 'react'
import ContentWrapper from './ContentWrapper/ContentWrapper'
import { FeedPostContext } from './FeedPostContext'
import Like from './Icons/Like'
import { Comment as ShowComments } from './Icons/Comment'
import Save from './Icons/Save'
import ModalWrapper from '../ModalWrapper'

const FeedPost = ({ postLink }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [areCommentsOpened, setAreCommentsOpened] = useState(false);
  const [postContent, setPostContent] = useState(
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      authorId: 1,
      media: "https://i.gifer.com/ZKZg.gif",
      likes: 0,
      date: new Date().toString(),
      comments: []
    }
  );

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

export default FeedPost