import { useEffect } from "react";
import Chat from "./Components/chat/Chat"
import Details from "./Components/detail/Details"
import List from "./Components/list/List"
import Login from "./Components/login/Login";
import Notification from "./Components/notification/Notification";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/firebase";

const App = () => {

  const user = false;

  useEffect(()=>{
    const unSub = onAuthStateChanged(auth, (user) =>{
      console.log(user);
      

      return ()=>{
        unSub();
      }
    })
  }, [])

  return (
    <div className="container">
      {user ? (<div className='container'>
        <List />
        <Chat />
        <Details />
      </div>) : (<Login />)}
      <Notification/>
    </div>
  )
}

export default App