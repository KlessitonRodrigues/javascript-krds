import React from "react"
import "./useContext.css"

import ContextData, { posts } from "../../data/contextData"
import Posts from "../../components/posts/Posts"

const UseContext = props => {
    return (
        <div className="page use-context">
            <h2>UseContext(MyContext)</h2>
            <ContextData.Provider value={posts}>
                <Posts />
            </ContextData.Provider>
        </div>
    )
}

export default UseContext