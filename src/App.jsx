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
    publishedAt: new Date("2021-11-08 08:30:00"),
    
  },
]

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post />
          <Post />
        </main>
      </div>
    </>
  )
}

