import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from './postSlice'

const PostView = () => {
    const {isLoading, posts, error} = useSelector(state => state.posts)

    const dispatch = useDispatch()

    const handlePosts = () =>{
        dispatch(fetchPosts())
    }

  return (
    <div>
        <h1>postView</h1>

        {
            isLoading ? (
                <h1>Loading......</h1>
            ): null
        }

        {
            posts.map((item, index) => (
                <p key={index}>{item.title}</p>
            ))
        }

        <button onClick={handlePosts} >Fetch</button>
    </div>

    
  )
}

export default PostView