import { Header } from './components/Header';
import { Sideber } from './components/Sidebar';
import styles from './App.module.css'
import './global.css';
import Post from './components/Post';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/felpzk.png',
      name: "Felipe Silva",
      role: 'Front-End'
    },
    content: [
      {type: 'paragraph', content: 'Fala Galera'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifolio'},
      {type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2023-03-09 10:01:43') 
  }
]

export function App() {
  return (
    <div className="App">
      <Header />

      <div className={styles.wrapper}>
        <Sideber />
        <main>
          {posts.map(posts => {
            return (<Post
              key={posts.id}
              author={posts.author}
              content={posts.content}
              publishedAt={posts.publishedAt}
            />
          )})}
        </main>
      </div>
    </div>
  )
}

