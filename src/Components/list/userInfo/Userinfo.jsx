import React from 'react'
import "./userInfo.css"

function Userinfo() {
  return (
    <div className='userInfo'>
        <div className="user"></div>
            <img src="./avatar.png" alt="" />
            <h2>Sanjeev</h2>

        <div className="icons">
            <img src="./more.png" alt="" />
            <img src="./video.png" alt="" />
            <img src="./edit.png" alt="" />
        </div>
    </div>
  )
}

export default Userinfo