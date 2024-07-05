import { Main } from './components/tempaltes/Main/Main'
import './App.css'
import { UserContextProvoder } from './data/Context/UserContextProvider'
function App() {

  return (

    <UserContextProvoder>
        <>
          <Main/>
        </>
    </UserContextProvoder>
  
  )
}

export default App
