
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
import NewPost from './components/feed/NewPost';
import Navbar from './components/navbar/Navbar';
import Feed from './components/feed/Feed';
import Modal from './components/Utils/Modal';


function App() {
  return (
    <>
    <Router>
      
      <Navbar/>
      <Routes>
        <Route path={"/"} element={
          <div className='feed-container'>
            <Feed/>
          </div>
        }>
          
        </Route>
        
        <Route path={"/signup"} element={<Signup/>}></Route>
        <Route path={"/newpost"} element={<NewPost/>}></Route>
        <Route path={"post/likes"} element={<Modal/>}></Route>  
        <Route path={"/login"} element={<Login/>}></Route>
      </Routes>
      
    </Router>

    
    </>
    
    );
}

export default App;
