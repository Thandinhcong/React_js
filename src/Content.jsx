
// //1. useEfffect (callback);
// -- gọi callback mỗi khi conponent re-reander
//2. useEfffect (callback,[]);
//3. useEfffect (callback,[deps]);

import { useEffect, useState } from "react";

//-------------------

// 1. callback luôn được gọi sau khi conponent mounted
function Content() {
    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((posts) => {
                setPosts(posts)
            })
    }, [])
    return (
        <div>
            <input type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <ul>
                {posts.map((post) => {
                    return <li key={post.id}>{post.title}</li>
                })}
            </ul>
        </div>

    )
}
export default Content;