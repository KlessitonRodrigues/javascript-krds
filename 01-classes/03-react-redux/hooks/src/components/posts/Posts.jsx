import React, { useContext } from "react"
import contextData from "../../data/contextData"

const Posts = () => {
    const postsData = useContext(contextData)

    const postList = postsData.map(post => (
        <div className="post" key={post.title}>
            <div className="post-header">
                <h3>
                    {post.title}
                </h3>
                <span className="post-date">
                    {post.date}
                </span>
            </div>
            <div className="post-content">
                <p>
                    {post.content}
                </p>
            </div>
        </div>
    ))
    return postList
}

export default Posts