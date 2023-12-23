import styles from './Comment.module.css';
import { ThumbsUp, Trash } from "@phosphor-icons/react";

export function Comment(){
  return (
    <div className={styles.comment}>
      <img src="https://github.com/Dex64ter.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Davi Santos</strong>
              <time title='8 de novembro às 8:30' dateTime='2023-11-08 08:30:00'>Cerca de 1h</time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>Parabéns pelo projeto, ficou incrível!</p>
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