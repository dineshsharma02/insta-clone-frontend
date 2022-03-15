
import './App.css';
import { useState } from 'react';
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
import UserInfo from './components/user/UserInfo';
import Alert from './components/Utils/Alert';
import ModalComment from './components/Utils/ModalComment';
import Likes from './components/feed/Likes';



function App() {
  const [alert, setAlert] = useState(null)

const showAlert = (message,type) =>{
  setAlert({
    type:type,
    message:message
  })
  setTimeout(() => {
    setAlert(null)
  }, 1700);
}
  return (
    <>
    <Router>
      
      <Navbar/>
      <Alert alert={alert}/>
      <Routes>
        <Route path={"/"} element={
          <div className='feed-container'>
            <Feed showAlert={showAlert}/>
          </div>
        }>
          
        </Route>
        
        <Route path={"/signup"} element={<Signup/>}></Route>
        <Route path={"/newpost"} element={<NewPost/>}></Route>
        <Route path={"post/likes/:post_id"} element={<Likes/>}></Route>
        <Route path={"post/comments/:post_id"} element={<ModalComment/>}></Route>   
        <Route path={"/login"} element={<Login/>}></Route>
        <Route path={`/userinfo`} element={<UserInfo/>}></Route>
      </Routes>
      
    </Router>

    
    </>
    
    );
}

export default App;
