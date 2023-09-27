import { useContentContext } from '../FeedPostContext'


const FeedPostModal = ({}) => {

    const comments = useContentContext().postContent.comments;

    return (
        <>
            {comments}
        </>
    )
}

export default FeedPostModal