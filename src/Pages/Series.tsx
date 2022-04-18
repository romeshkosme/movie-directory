import React from 'react'
import "../Assests/Styles/Series.css"
import underConstruction from "../Assests/Static/underConstruction.svg"

function Series() {
  return (
    <div className='series'>
      <img src={underConstruction} alt="" width={'50%'}/>
      <h1>Under Construction</h1>
    </div>
  )
}

export default Series