import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Navbar from './components/Navbar'
import RegisterPage from './pages/RegisterPage'
import TodoPage from './pages/TodoPage'
import AddTodoPage from './pages/AddTodoPage'
import EditTodoPage from './pages/EditTodoPage'
import PostPage from './pages/PostPage'
import PostDetailPage from './pages/PostDetailPage'
import EditCommentPage from './pages/EditCommentPage'

function App() {
  return (
    // <Router>
    //   <div>
    //     <Switch>
    //       <Route>
    <div className="App">
      <Navbar/>
      <RegisterPage/>
      <TodoPage/>
      <AddTodoPage/>
      <PostPage/>
      <PostDetailPage/>
      <EditCommentPage/>
    </div>
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>
  );
}

export default App;
