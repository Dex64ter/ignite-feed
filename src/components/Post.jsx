/* eslint-disable react/prop-types */
import { useState } from 'react';
import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Avatar } from './Avatar.jsx';
import { Comment } from './Comment.jsx';

import styles from './Post.module.css';


export function Post({ author, content, publishedAt }) {
  const [comments, setComments] = useState([
    "Post muito legal, meus parabéns!",
  ])
  const [newCommentText, setNewCommentText] = useState('')

  const isNewCommentDisabled = newCommentText.length === 0;


  const publishedDateFormated = format(publishedAt, "d 'de' MMMM 'às' HH:mm'h'", {
    locale: ptBR
  })

  const publishedDateRelativeNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleCreateNewComment(event) {
    event.preventDefault()
  
    // imutabilidade
    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function handleNewCommentChange(){
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }

  function handleNewCommentInvalid() {
    event.target.setCustomValidity('Este campo é obrigatório')
  }

  function deleteComment(commentToDelete) {
    const CommentsWithoutOne = comments.filter(comment => {
      return comment !== commentToDelete;
    })

    setComments(CommentsWithoutOne);
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatar} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time
          title={publishedDateFormated}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeNow}
        </time>
      </header>
      <div className={styles.content}>
        {
          content.map(line => {
            if (line.type === 'paragraph') {
              return <p key={line.content}>{line.content}</p>
            }else if (line.type === 'link') {
              return <p key={line.content}><a href="#">{line.content}</a></p>
            }
          })
        }
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder="Comente algo..."
          name='comment'
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button type="submit" disabled={isNewCommentDisabled}>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {
          comments.map(comment => {
            return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />)
          })
        }
      </div>
    </article>
  )
}