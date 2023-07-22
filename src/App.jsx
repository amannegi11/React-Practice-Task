import React, { useState } from 'react'
import { dummy ,filter} from './data'
import Buttons from './assets/components/Buttons';
import DisplayCards from './assets/components/DisplayCards';
const App = () => {
  const FilterApply=["All","4","499+","499-"]
  const [current,setCurrent]=useState(filter[0]) 
  const [filterCat,setFilter]=useState(FilterApply[0])
  
  return (
    <div className='w-full h-screen  bg-blue-300'>
      <nav className='text-2xl font-extrabold mx-auto text-yellow-200 flex items-center justify-center bg-black h-16'>
        Hello Guys !  Welcome To Negi Class Courses</nav>
      
      <Buttons data={filter}
      setCurrent={setCurrent}
      current={current}
      setFilter={setFilter}/>

      <DisplayCards 
      data={dummy}
      category={current}
      filterCat={filterCat}/>
    </div>
  )
}

export default App