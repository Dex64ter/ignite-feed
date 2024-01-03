import { Avatar } from './Avatar';
import styles from './Comment.module.css';
import { ThumbsUp, Trash } from "@phosphor-icons/react";

// eslint-disable-next-line react/prop-types
export function Comment({ content }){
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/lucasmatosc.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Lucas Matos</strong>
              <time title='8 de novembro às 8:30' dateTime='2023-11-08 08:30:00'>Cerca de 1h</time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={20} />
            Aplaudir<span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}