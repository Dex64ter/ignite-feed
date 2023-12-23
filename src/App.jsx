import { Sidebar } from "./components/SideBar";
import { Header } from "./components/Header";
import { Post } from "./components/Post";

import "./global.css";

import styles from "./App.module.css";

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

