
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
// import Navbar from './components/navbar/Navbar';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path={"/login"} element={<Login/>}></Route>
        <Route path={"/signup"} element={<Signup/>}></Route>
      </Routes>
    </Router>
    );
}

export default App;
