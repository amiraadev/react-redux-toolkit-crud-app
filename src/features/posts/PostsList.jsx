import { useDispatch, useSelector } from "react-redux";
import { deletePost, selectedAllPosts } from "./postSlice";
import { Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import {RiDeleteBin5Line,RiEditLine } from "react-icons/Ri";


function PostsList() {

    const allPosts =useSelector(selectedAllPosts) 
    // console.log(allPosts);

    const dispatch = useDispatch()
    const handleDelete = (id) =>{
      dispatch(deletePost(id))
    }

    const renderedPosts = allPosts.map((post) => (
          <article className="d-flex justify-content-between align-items-center " key={post.id}> 
            <div>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </div> 
            <div>
              <Link to={`/update/${post.id}`} type='submit' size="bg" className='btn btn-success' style={{margin: '10px'}}><RiEditLine></RiEditLine></Link>
              <Button type='submit' size="bg" onClick={()=>handleDelete(post.id)} className='btn btn-danger'style={{margin: '10px'}} ><RiDeleteBin5Line></RiDeleteBin5Line></Button>
            </div>
        </article>
    ))

  return (
    
    <Container>
        <h2>Posts</h2>
        {renderedPosts} 
        <Link size="lg" className="btn lg btn-info" to="/add" >Add Post</Link>
    </Container>
  
  )
}

export default PostsList
