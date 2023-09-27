import { useState, useRef, useEffect } from "react";
import styles from './Comment.module.scss';
import PropTypes from 'prop-types';

const Comment = ({ submitFunc }) => {
    const [text, setText] = useState('');
    const textareaRef = useRef(null);

    useEffect(() => {
        const textarea = textareaRef.current;
        if (textarea && textarea.rows < 5) {
            textarea.style.height = "auto";
            textarea.style.height = `${textarea.scrollHeight}px`;
        }
    }, [text]);

    function handleSubmit(event) {
        event.preventDefault();
        setText('');
        submitFunc(text);
    }

    function handleInput(event) {
        setText(event.target.value);
    }

    function handleKeyDown(event) {
        if (event.key === "Enter" && !event.shiftKey) {
            handleSubmit(event);
        }
    }

    return (
        <form
            className={styles.commentForm}
            action=""
            onSubmit={handleSubmit}
        >
            <div className={styles.textAreaWrapper}>
                <textarea
                    type="text"
                    ref={textareaRef}
                    rows={1}
                    maxLength={100}
                    className={styles.commentInput}
                    placeholder={'Leave comment...'}
                    wrap="hard"
                    spellCheck={false}
                    value={text}
                    onKeyDown={handleKeyDown}
                    onInput={handleInput}
                />
                <span 
                    className={styles.textCounter}>
                    { !!text.length && `${text.length}/100`}
                </span>
            </div>
            {text &&
                <button
                    className={styles.submitButton}>
                    Publish
                </button>}
        </form>
    )
}

Comment.propTypes = {
    submitFunc: PropTypes.func.isRequired
}

export default Comment;