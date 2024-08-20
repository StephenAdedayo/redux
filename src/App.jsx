import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from './redux/slice/counterSlice'



const App = () => {
const count = useSelector((state) => {
return state.counter.value
})

const dispatch = useDispatch()  

  return (
    <div className=' flex items-center justify-center h-screen'>

      <div className='bg-black space-x-10 rounded-xl p-20'>
      <button className='px-6 py-3  bg-green-600 hover:bg-green-800 text-white rounded-xl ' onClick={() => dispatch(increment())}>Increment</button>
      <button  className='px-6 py-3 bg-red-600 hover:bg-red-800 text-white rounded-xl ' onClick={() => dispatch(decrement())}>Decrement</button>
      <button  className='px-6 py-3 bg-gray-400 hover:bg-gray-500 text-white rounded-xl ' onClick={() => dispatch(reset())}>Reset</button>
     

       
      <div>
        <h1 className='text-white'>counter: {count}</h1>
      </div>

      </div>

    </div>
  )
}

export default App
