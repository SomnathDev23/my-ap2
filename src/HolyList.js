import React from 'react'

function HolyList() {
    const names =['jai','shree','ram']
  return (
    <div>
      {
        names.map(name=><h2>{name}</h2>)
      }
    </div>
  )
}

export default HolyList
