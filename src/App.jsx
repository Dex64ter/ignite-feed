import { Sidebar } from "./components/SideBar";
import { Header } from "./components/Header";
import { Posts } from "./Posts";

import "./global.css";

import styles from "./App.module.css";

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Posts
            author="Davi"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae animi officiis ex magni reiciendis quis temporibus ea tempora earum, quasi dicta aut."    
          />
          <Posts
            author="Diego"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae animi officiis ex magni reiciendis quis temporibus ea tempora earum, quasi dicta aut."    
          />
        </main>
      </div>
    </>
  )
}

