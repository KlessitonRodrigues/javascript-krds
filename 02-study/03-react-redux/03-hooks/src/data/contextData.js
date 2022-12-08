import React from "react"

export const posts = [
    {
        title: "title", date: "25/02/21",
        content: `Lorem ipsum dolor sit amet 
        consectetur adipisicing elit.`
    },
    {
        title: "title 2", date: "01/04/21",
        content: `Voluptas expedita obcaecati alias, 
        doloremque accusantium dolorum facere!`
    },
    {
        title: "title 3", date: "16/08/21",
        content: `Obcaecati iure non vero nobis 
        reprehenderit modi at?`
    },
    {
        title: "title 4", date: "19/11/21",
        content: `Neque accusantium officiis rerum 
        illo placeat.`
    },
]

const PostContext = React.createContext(posts)
export default PostContext
