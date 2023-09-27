import React, { useState, useRef, useEffect } from 'react'
import styles from './Comment.module.scss'

const Comment: React.FC = () => {
  const [text, setText] = useState<string>('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea && textarea.rows < 5) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [text]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement> | React.KeyboardEvent<HTMLTextAreaElement>) {
    event.preventDefault();
    setText('');
  }

  function handleInput(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setText(event.target.value);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLTextAreaElement>) {
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
          {!!text.length && `${text.length}/100`}
        </span>
      </div>
      {text &&
        <button
          className={styles.submitButton}>
          Publish
        </button>}
    </form>
  );
}

export default Comment