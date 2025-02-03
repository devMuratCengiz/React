import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/counterSlice'
import UserList from './UserList'


function App() {

  // const dispatch = useDispatch();
  // const state = useSelector((store) => store.counter);
  // console.log(state.value);

  return (
    <div>
      <UserList />
      {/* {
        state.value
      }
      <button onClick={() => dispatch(increment())}>Arttır</button>
      <button onClick={() => dispatch(decrement())}>Azalt</button> */}
    </div>
  )
}

export default App
