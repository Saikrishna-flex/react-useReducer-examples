import React, { useReducer, useState } from 'react'
import { postReducer, postInitialValue } from '../reducer/post/postReducer'
import { POST_ACTION_TYPES } from '../reducer/post/postActionTypes'

const Post = () => {

    // with useState

    // const [isLoading, setIsLoading] = useState(false);
    // const [post, setPost] = useState([]);
    // const [error, setError] = useState(null);

    // const handlePost = async () => {
    //     setIsLoading(true);
    //     try {
    //         const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    //         if (!response.ok) {
    //             throw new Error(`HTTP Error! Status ${response.status}`);
    //         }
    //         const data = await response.json();
    //         setPost(data);
    //         setError(null)
    //     } catch (error) {
    //         setPost([]);
    //         setError(error);
    //     } finally {
    //         setIsLoading(false);
    //     }
    // };


    // with useReducer Hook

    const [state, dispatch] = useReducer(postReducer, postInitialValue)

    const handlePost = () =>{
        dispatch({type:POST_ACTION_TYPES.FETCH_START});
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then((response)=> { 
            if(!response.ok) {
                throw new Error(`HTTP Error ! Status ${response.status}`)
            }
            return response.json()})
        .then((data) => {
            dispatch({type: POST_ACTION_TYPES.FETCH_SUCCESS, payload:data})
        })
        .catch((error) => {
            dispatch({type: POST_ACTION_TYPES.FETCH_FAILURE, payload:error.message})
        })
    }

  return (
    <div>
        <button onClick={handlePost}>
          { state.isLoading ? 'Loading....' : 'Show Post' }
        </button>
        {state.post && <p>{state.post.title}</p>}   
        {state.error && <p>{state.error.message}</p>} 
    </div>
  )
}

export default Post