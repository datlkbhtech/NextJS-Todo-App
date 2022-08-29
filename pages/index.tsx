import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import AddTodoForm from '../components/AddTodoForm.js'
import TodoList from '../components/TodoList'
import TotalCompleteItems from '../components/TotalCompleteItems'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <AddTodoForm />
        <TodoList />
        <TotalCompleteItems />
      </main>
    </div>
  )
}

export default Home
