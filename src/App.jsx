import { BrowserRouter as Router , Routes,Route } from 'react-router-dom'
import './App.css'
import PostsList from './features/posts/postsList'
import AddForm from './features/posts/AddForm'
import UpdatePost from './features/posts/UpdatePost'


function App() {

  return (
    <Router>
      <Routes>
            <Route path="/" element={<PostsList/>} />
            <Route path="/add" element={<AddForm/>} />
            <Route path="/update/:id" element={<UpdatePost/>} />
       </Routes>
    </Router>
   
  )
}

export default App
