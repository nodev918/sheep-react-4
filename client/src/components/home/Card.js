import React from 'react'
import './card.css'

export default function Card() {
  
  const [post,setPost] = React.useState({})
  
  React.useEffect(()=>{
      fetch('/allpost')
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        setPost(data)
      })
  },[])


/*
  const sendData = () => {
    console.log("sendData")
    fetch('/test', { method: "get" })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
  }
*/



  return (
    <div className="card-container">
      <div className="card-case">
        <input
          type="button"
          value="fetch"
          onClick={() => {
            console.log(post)
          }}
        />
      </div>
    </div>
  )
}
