import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css'
import { Avatar } from './Avatar';
import { useState } from 'react';

export function Comment ({ content, onDeleteComments }) {
  const [likeCounter, setLikeCounter] = useState(0);

  const handleDeleteComment = () => {
    onDeleteComments(content)
  }

  const handleLikeComment = () => {
    setLikeCounter(likeCounter + 1) 
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} img="https://github.com/felpzk.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego Gustavo</strong>
              <time title='11 de maio as 8:13' dateTime='2022-05-11 08:13:32'>Cerca de 1h atras</time>
            </div>
            <button onClick={handleDeleteComment} title='Deletar Comentario'>
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Curtir<span>{likeCounter}</span>
          </button> 
        </footer>
        <div className={styles.separator}></div>
      </div>
    </div>
  );
}