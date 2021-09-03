import React from 'react'
import './limitpost.css'
import { UserContext } from '../../App'


export default function Limitpost() {

  const data = React.useContext(UserContext)



  return (
    <div className="limitpost-container">
      <div className="limitpost-case">
        {data.users.map(user => {
          return (
            <div key={user} className="limitpost-item">
              <div className="limitpost-item-circle">
                <img
                  className="limitpost-item-pic"
                  src="https://res.cloudinary.com/yalecloud/image/upload/v1627549064/h3ltqp3up0wsc7xme1jg.jpg"
                  alt="little-dog"
                ></img>
              </div>
              <div className="limitpost-item-name"> {user} </div>
            </div>
          )



        })}
      </div>
    </div>
  )
}

