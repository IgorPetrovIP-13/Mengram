interface CommentProps {
    fill?: string
}

export function Comment({fill = 'black'}: CommentProps){
    return (
        <svg width="800px" height="800px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
            <path fill={fill}
                  d="M736 504a56 56 0 1 1 0-112 56 56 0 0 1 0 112zm-224 0a56 56 0 1 1 0-112 56 56 0 0 1 0 112zm-224 0a56 56 0 1 1 0-112 56 56 0 0 1 0 112zM128 128v640h192v160l224-160h352V128H128z"/>
        </svg>
    )
}

export default Comment;