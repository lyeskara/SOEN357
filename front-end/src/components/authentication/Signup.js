import React from 'react'

const Signup = () => {
  fetch("/dessertItems").then((Response)=>{
    return Response.json()
  }).then((data)=>{
    console.log(data)
  })
  return (
    <div>
      
    </div>
  )
}

export default Signup
