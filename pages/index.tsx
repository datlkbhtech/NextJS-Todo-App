import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import AddTodoForm from '../components/AddTodoForm.js'
import TodoList from '../components/TodoList'
import TotalCompleteItems from '../components/TotalCompleteItems'
import Header from './layout/Header'
import Footer from './layout/Footer'
const Home: NextPage = () => {
  return (
    <div className="bg-gray-300 w-100 h-screen text-white">
      <div className="flex flex-col container w-4/6 mx-auto md:pt-8">
        <div className="flex flex-col bg-gray-200 shadow-lg">
          <Header />
          <div className='mx-4 mt-6 pb-40'>
            <AddTodoForm />
            <br />
            <TodoList />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Home
