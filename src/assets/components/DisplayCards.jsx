import React from 'react'
import Cards from './Cards'
const DisplayCards = ({data,category,filterCat}) => {

    let newData=[];
    data.forEach((i)=>{
        if(category==="All"){
            newData=[...data]
            if(filterCat==="499-") newData=data.filter((p)=>p.price<=499)
            if(filterCat==="499+") newData=data.filter((p)=>p.price>499)
            if(filterCat==="4") newData=data.filter((p)=>p.rating>4)
        }
       
        if (i.category===category){
            newData.push(i)
            if(filterCat==="499-") newData=newData.filter((p)=>p.price<=499)
            if(filterCat==="499+") newData=newData.filter((p)=>p.price>499)
            if(filterCat==="4") newData=newData.filter((p)=>p.rating>4)
        }
        
    })

        
    
  return (
    <div>
        <Cards data={newData}category={category} />
    </div>
  )
}

export default DisplayCards