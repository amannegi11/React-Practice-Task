import React from 'react'
import Filter from './Filter'


const Buttons = ({data,setCurrent,current,setFilter}) => {
   
  return (
    <div className='w-[800px] mt-6  mx-auto flex gap-5 items-center'>
        {
            data.map((filter,index)=>(
                <button key={index} 
                className={`${current===filter ? "bg-yellow-300  border-black border-2":"bg-black"}
                 text-white font-bold px-6 py-1 rounded-md`}
                onClick={()=>setCurrent(filter)}

                >{filter}</button>
            ))
        }
    <Filter setFilter={setFilter}/>
    </div>
  )
}

export default Buttons