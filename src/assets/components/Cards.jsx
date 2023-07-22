import React from 'react'
import {AiFillStar} from 'react-icons/ai'
import {BsCurrencyRupee} from 'react-icons/bs'
const Cards = ({data,category}) => {
    const color={"All":"yellow-300","Ai":"purple-400","Development":"pink-700","Security":"fuchsia-700",
        "DSA":"lime-500"}
  return (
    <div className='w-11/12 flex mx-auto gap-4 mt-4 flex-wrap'>
    {data.length === 0 ?
        (<h1 className=' text-black font-semibold text-[80px]  mx-auto mt-12'>No such course found</h1>)
        :
        (data.map((val,index)=>(
            <div key={index} className={`bg-${color[category]}  h-[180px] rounded-md w-[260px] flex flex-col justify-center gap-4 border-4`}>
                <h1 className='px-3 text-xl font-semibold text-'>{val.title}</h1>
                <p className='px-3'>This is {val.category} course in this course you will be learning about {val.title} </p>
                <div className='flex justify-between px-3'>
                    <div className='text-green-900 font-semibold flex items-center'>Price : <BsCurrencyRupee/>{val.price}</div>
                    <div className='flex items-center font-bold'>Rating : {val.rating} <AiFillStar/> </div>
                </div>
            </div>)))}
    </div>
  )
}

export default Cards