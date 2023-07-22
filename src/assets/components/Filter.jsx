import React from 'react'

const Filter = ({ setFilter }) => {
  const handleit = (e) => {
    setFilter(e.target.value)
  }
  return (

    <div >
      <label htmlFor="filter"
        className='bg-blue-700 
          rounded-md px-4 py-1 text-white'>
        filter :
        <select id="filter" className=' bg-blue-700 text-white border-none'
          onChange={handleit}>
          <option value="All">
            All
          </option>
          <option value="4">
            4+ Ratings
          </option>
          <option value="499-">
            price under 499
          </option>
          <option value="499+" >
            price over 499
          </option>

        </select>
      </label>
    </div>
  )
}

export default Filter