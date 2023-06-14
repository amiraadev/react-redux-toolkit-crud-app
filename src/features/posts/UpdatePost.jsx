import { useDispatch, useSelector } from 'react-redux'
import { updatePost, selectedAllPosts } from './postSlice'
import { useState } from 'react';
import {  Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Container,Form } from 'react-bootstrap';

function UpdatePost() {
    const {id} =useParams();
    const posts = useSelector(selectedAllPosts);
    const updatedPost = posts.find((post) => post.id == id);

    const [title , setTitle] = useState(updatedPost.title)
    const [content , setContent] = useState(updatedPost.content)
  
     const onTitleChanged = (e) => setTitle(e.target.value)
     const onContentChanged = (e) => setContent(e.target.value)
  
     const dispatch = useDispatch();
     const navigate = useNavigate()
  
     const handleUpdate = (e) => {
         e.preventDefault();
         dispatch(updatePost({id :id,title,content }))
         navigate('/');
  
     }
  return (
  


    <div>
      <Container bg="dark" style={{ width: '30%' }}>
        <h2>Add a new post</h2>
        <Form onSubmit={handleUpdate}>
            <Form.Group className="mb-3" controlId="postTitle" >
                <Form.Label className="label-left">Title:</Form.Label>
                <Form.Control
                    type="text"
                    value={title}
                    onChange={onTitleChanged} 
                    required  />
            </Form.Group>

            <Form.Group className="mb-3"  controlId="postContent">
                <Form.Label className="label-left">Content:</Form.Label>
                <Form.Control 
                   as="textarea" 
                   value={content}      
                   onChange={onContentChanged}
                   rows={3} 
                   required/>
            </Form.Group>
            <Button type='submit' size="lg"  className='btn btn-info'  >Update Post</Button>
            <Link to='/' size="lg"  className='btn btn-danger'  >Go Back</Link>

    </Form>
    
        
    </Container>
    </div>
  )
}

export default UpdatePost
