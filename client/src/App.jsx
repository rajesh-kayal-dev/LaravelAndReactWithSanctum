
import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import CreateNewPost from './pages/CreateNewPost'
import EditPost from './pages/EditPost'

function App() {


  return (
    <>
      
      <Routes>
        <Route path='/' element={<Home /> } />
        <Route path='/create-new-post' element={<CreateNewPost /> } />
        <Route path='/edit-post/:id' element={<EditPost /> } />
      </Routes>
    </>
  )
}

export default App
