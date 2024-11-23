import React, { useState } from 'react'
import "./addUser.css"
import { arrayUnion, collection, doc, getDoc, getDocs, query, serverTimestamp, setDoc, updateDoc, where } from 'firebase/firestore'
import { db } from '../../../../lib/firebase'
import { useUserStore } from '../../../../lib/userStore'


function AddUser() {
  const [user, setUser] = useState(null)
  const { currentUser } = useUserStore()

  const handleSearch = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const username = formData.get("username")

    try {

      const userRef = collection(db, "users");
      const q = query(userRef, where("username", "==", username));

      const qureySnapShot = await getDocs(q)
      if (!qureySnapShot.empty) {
        setUser(qureySnapShot.docs[0].data());
      }
    } catch (err) {
      console.log(err);
    }
  }
  


  const handleAdd = async () => {
    const chatRef = collection(db, "chats")
    const userChatRef = collection(db, "userchats")

    try {
      const newChatRef = doc(chatRef)

      await setDoc(newChatRef, {
        createdAt: serverTimestamp(),
        messages: [],
      })

      await updateDoc(doc(userChatRef, user.id), {
        chats: arrayUnion({
          chatId: newChatRef.id,
          lastMessage: "",
          recieverID: currentUser.id,
          updatedAt: Date.now(),
        })
      })
      console.log(newChatRef.id);

      await updateDoc(doc(userChatRef, currentUser.id), {
        chats: arrayUnion({
          chatId: newChatRef.id,
          lastMessage: "",
          recieverID: user.id,
          updatedAt: Date.now(),
        })
      })

      console.log(newChatRef.id);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className='addUser'>
      <form onSubmit={handleSearch}>
        <input type="text" placeholder='Username' name='username' />
        <button>Search</button>
      </form>

      {user && <div className="user">
        <div className="details">
          <img src={user.avatar || "./avatar.png"} alt="" />
          <span>{user.username}</span>
        </div>
        <button onClick={handleAdd}>Add User</button>
      </div>}
    </div>
  )
}

export default AddUser