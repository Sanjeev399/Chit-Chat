import Chat from "./Components/chat/Chat"
import Details from "./Components/detail/Details"
import List from "./Components/list/List"
import Login from "./Components/login/Login";
import Notification from "./Components/notification/Notification";

const App = () => {

  const user = true;

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