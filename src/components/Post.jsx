import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import styles from './Post.module.css'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import { useState } from 'react'

function Post ({ author, publishedAt, content }){
    
    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'as' HH:mm'h'", {
        locale: ptBR,
    })

    const publishdDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
    })

    const [comments, setComments] = useState([
        'Poste muito bacana, hein'
    ])

    const [newCommentText, setNewCommentText] = useState('')

    const handleNewCommentChange = (event) => {
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value);
    }
        

    function handleCreateNewComment(event) {
        event.preventDefault()
        setComments([...comments, newCommentText])
        setNewCommentText('')
    }

    function deleteComments(commentToDelete) {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete;
        }) 

        setComments(commentsWithoutDeletedOne);
    }

    const handleNewCommentInvalid = () => {
      event.target.setCustomValidity('Esse campo é obrigatorio')  
    }

    const isNewCommentEmpty = newCommentText.length === 0
    
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar 
                        hasBorder
                        img={author.avatarUrl}
                    />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                
                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishdDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>;
                    } else if (line.type === 'link') {
                        return <p key={line.content}><a href="#">{line.content}</a></p>;
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    placeholder='Deixe um comentario'
                    onInvalid={handleNewCommentInvalid}
                    required
                 />
                <footer>
                    <button disabled={isNewCommentEmpty} type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(coments => {
                return <Comment
                    key={coments}
                    content={coments}
                    onDeleteComments={deleteComments}
                 />
                })}
            </div>
        </article>
    )
}

export default Post