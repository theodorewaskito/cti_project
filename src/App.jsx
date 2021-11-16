import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Navbar from './components/Navbar'
import RegisterPage from './pages/RegisterPage' 
import LoginPage from './pages/LoginPage' 
import TodoPage from './pages/TodoPage'
import AddTodoPage from './pages/AddTodoPage'
import PostPage from './pages/PostPage'
import PostDetailPage from './pages/PostDetailPage'
import EditCommentPage from './pages/EditCommentPage'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/comment/:commentId" element={<EditCommentPage/>}/>
          <Route path="/post/:postId"  element={<PostDetailPage/>}/>
          <Route path="/todo/add" element={<AddTodoPage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/todo" element={<TodoPage/>}/>
          <Route path="/post" element={<PostPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
