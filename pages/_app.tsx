import '../styles/globals.css'
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../redux/todoSlice';

const userStore = configureStore({
  reducer: {
    todos: todoReducer,
  },
});
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={userStore}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
