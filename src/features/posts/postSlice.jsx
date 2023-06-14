import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id:1,title:"Learning redux toolkit",content:"interesting course... "},
    {id:2,title:"Learning git",content:"i hate this course... "},
]

const postSlice = createSlice({
    name:"posts",
    initialState,
    reducers:{
          addPost(state,action){
            state.push(action.payload)
          },
          deletePost(state,action){
            return state=state.filter((post) => post.id != action.payload)
          },
          updatePost(state,action){
            const { id, title, content } = action.payload;
            const postToUpdate = state.find((post) => post.id == id);
            if (postToUpdate) {
              postToUpdate.title = title;
              postToUpdate.content = content;
            }
             },
    }
})
export const selectedAllPosts = (state) => state.posts;
export const {addPost,deletePost,updatePost} = postSlice.actions
export default postSlice.reducer; 