import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Login from './Pages/Login/Login'
import LoginSuccess from './Pages/LoginSuccess/LoginSuccess'
import ToDo from './Pages/TO-DO/ToDo'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='login' element={<Login/>}></Route>
          <Route path='/login-success' element={<LoginSuccess/>}/>
          <Route path='/to-do' element={<ToDo/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
