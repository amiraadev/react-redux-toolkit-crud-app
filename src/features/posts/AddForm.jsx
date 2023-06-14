import { useDispatch, useSelector } from 'react-redux'
import { addPost, selectedAllPosts } from './postSlice'
import { useState } from 'react';
import {  Link, useNavigate } from 'react-router-dom';
import { Button, Container,Form } from 'react-bootstrap';

function AddForm() {
    const posts = useSelector(selectedAllPosts);
     console.log(posts[0].title);

   const [title , setTitle] = useState("")
   const [content , setContent] = useState("")

    const onTitleChanged = (e) => setTitle(e.target.value)
    const onContentChanged = (e) => setContent(e.target.value)

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleAdd = (e) => {
        e.preventDefault();
        dispatch(addPost({id :posts.length+1,title,content }))
        console.log(posts);
        navigate('/');

    }
     
  return (
    <Container bg="dark" style={{ width: '30%' }}>
        <h2>Add a new post</h2>
        <Form onSubmit={handleAdd}>
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
            <Button type='submit' size="lg"  className='btn btn-info'  >Save Post</Button>
            <Link to='/' size="lg"  className='btn btn-danger'  >Go Back</Link>

    </Form>
    
        
    </Container>
  )
}

export default AddForm
