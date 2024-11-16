import Chat from "./Components/chat/Chat"
import Details from "./Components/detail/Details"
import List from "./Components/list/List"

const App = () => {
  return (
    <div className='container'>
      <List/>
      <Chat/>
      <Details/>
    </div>
  )
}

export default App