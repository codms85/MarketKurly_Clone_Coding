import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './Main/Main'
import Login from './Login/Login'

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
    </BrowserRouter>
    
  )
}

export default App;
