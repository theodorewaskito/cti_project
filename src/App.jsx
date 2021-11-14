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
    </div>
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>
  );
}

export default App;
