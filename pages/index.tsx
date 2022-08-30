import type { NextPage } from 'next'
import AddTodoForm from '../components/AddTodoForm'
import TodoList from '../components/TodoList'
import Header from './layout/Header'
import Footer from './layout/Footer'
const Home: NextPage = () => {
  return (
    <div className="bg-gray-300 w-100 h-auto">
      <div className="flex flex-col container w-4/6 mx-auto md:pt-16">
        <div className="flex flex-col bg-gray-200 shadow-lg">
          <Header />
          <div className='mx-4 mt-6 pb-11 overflow-auto'>
            <AddTodoForm />
            <br />
            <div className="ml-1 my-6 h-96 overflow-auto">
              <TodoList />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Home
