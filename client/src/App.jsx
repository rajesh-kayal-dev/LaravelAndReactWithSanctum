
import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import CreateNewPost from './pages/CreateNewPost'

function App() {


  return (
    <>
      
      <Routes>
        <Route path='/' element={<Home /> } />
        <Route path='/create-new-post' element={<CreateNewPost /> } />
      </Routes>
    </>
  )
}

export default App
