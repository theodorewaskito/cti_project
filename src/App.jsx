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

import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="container">
          <Routes>
            
            <Route path="/comment/:commentId" element={
              <PrivateRoute>
                <EditCommentPage/>
              </PrivateRoute>
            }/>
            <Route path="/post/:postId"  element={
              <PrivateRoute>
                <PostDetailPage/>
              </PrivateRoute>
            }/>
            <Route path="/todo/add" element={
              <PrivateRoute>
                <AddTodoPage/>
              </PrivateRoute>
            }/>
            <Route path="/register" element={
              <PublicRoute>
                <RegisterPage/>
              </PublicRoute>
            }/>
            <Route path="/login" element={
              <PublicRoute>
                <LoginPage/>
              </PublicRoute>
            }/>
            <Route path="/post" element={
              <PrivateRoute>
                <PostPage/>
              </PrivateRoute>
            }/>
            <Route path="/" element={
              <PrivateRoute>
                <TodoPage/>
              </PrivateRoute>
            }/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
