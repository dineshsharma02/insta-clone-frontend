import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Loading from '../Utils/Loading'
import Me from '../Utils/Me'
import PostItem from './PostItem'

const AllPosts = (props) => {

    const [posts, setPosts] = useState([])
  let history = useNavigate();
  const [loading, setLoading] = useState(false)
  



  useEffect(async() => {
    setLoading(true)
    let token = localStorage['authtoken']
    console.log(token);
    if (!token){
      history("/login",{replace:true})
    }
    const response = await fetch("http://127.0.0.1:8000/userposts/1/",{
            method:"GET",
            headers:{
                "Content-type":"application/json",
                'Authorization': `Bearer ${token}`

            },
            
        });

        const json = await response.json()
        console.log(response.status)
        // console.log(response);
        console.log(json);
        if (response.status===200){
          setLoading(false)
            console.log("");
            setPosts(json)
            // props.showAlert("Posts fetched","info")
            
        }
        else if(response.status===401){
          history("/login",{replace:true})
        }

        else{
            console.log(response);
        }
        setLoading(false)
        
  }, [])











  return (
    <>
    
    {(loading===true)?<div className="center-container">
    
      <Loading/>
    </div>:
    <div className='post-collage-container'>
      {posts.map((element)=>{
        return <PostItem
        id = {element.id}
        // username = {element.username}
        image = {element.image}
        likes = {element.total_likes}
        comments = {element.total_comments}
        caption = {element.caption}
        date = {element.created_at}

        />
      })}
    </div>

    }
    </>


  )
}

export default AllPosts