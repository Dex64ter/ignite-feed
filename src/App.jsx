import { Sidebar } from "./components/SideBar";
import { Header } from "./components/Header";
import { Post } from "./components/Post";

import "./global.css";

import styles from "./App.module.css";

// author: {avatar: "", name: "", role: ""}
// publishedAt: Date
// content: ""

const posts = [
  {
    id: 1,
    author: {
      avatar: "https://www.github.com/MrPinabutter.png",
      name: "Vitinho",
      role: "Dev Front-end",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋", },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀", },
      { type: "link", content: "jane.design/doctorcare"},
      { type: "link", content: "#novoprojeto"}
    ],
    publishedAt: new Date("2023-12-23 08:30:00"),
    
  },
  {
    id: 2,
    author: {
      avatar: "https://www.github.com/Dex64ter.png",
      name: "Davi",
      role: "Software Engineer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋", },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀", },
      { type: "link", content: "jane.design/doctorcare"},
      { type: "link", content: "#novoprojeto"}
    ],
    publishedAt: new Date("2023-02-24  08:30:00"),
    
  },
]

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {          
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}               
              />
            )          
          })}
        </main>
      </div>
    </>
  )
}

