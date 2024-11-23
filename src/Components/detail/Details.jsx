import React from 'react'
import "./detail.css"
import { auth } from '../../lib/firebase'

function Details() {
  return (
    <div className='detail'>

      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>Sanjeev</h2>
        <p>Lorem ipsum adipisicing elit.</p>
      </div>

      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Privacy & help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Shared photos</span>
            <img src="./arrowDown.png" alt="" />
          </div>
        </div>

        <div className="photos">
          <div className="photoItem">
            <div className="photoDetails">
              <img src="https://images.pexels.com/photos/2513975/pexels-photo-2513975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <span>photo_2024_2.png</span>
            </div>
            <img className='downloadIcon' src="./download.png" alt="" />
          </div>

          <div className="photoItem">
            <div className="photoDetails">
              <img src="https://images.pexels.com/photos/2513975/pexels-photo-2513975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <span>photo_2024_2.png</span>
            </div>
            <img className='downloadIcon' src="./download.png" alt="" />
          </div>

          <div className="photoItem">
            <div className="photoDetails">
              <img src="https://images.pexels.com/photos/2513975/pexels-photo-2513975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <span>photo_2024_2.png</span>
            </div>
            <img className='downloadIcon' src="./download.png" alt="" />
          </div>

          <div className="photoItem">
            <div className="photoDetails">
              <img src="https://images.pexels.com/photos/2513975/pexels-photo-2513975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <span>photo_2024_2.png</span>
            </div>
            <img className='downloadIcon' src="./download.png" alt="" />
          </div>

        </div>

        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <button>Block User</button>
        <button className='logout' onClick={()=>auth.signOut()}>Logout</button>
      </div>

    </div>
  )
}

export default Details