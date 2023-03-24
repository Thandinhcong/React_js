
// //1. useEfffect (callback);
// -- gọi callback mỗi khi conponent re-reander
//2. useEfffect (callback,[]);
//3. useEfffect (callback,[deps]);

import { useEffect, useState } from "react";

//-------------------

// 1. callback luôn được gọi sau khi conponent mounted
const tabs = ['posts', 'comments', 'albums']
function Content() {
    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([]);
    const [type, setType] = useState('posts')
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then((response) => response.json())
            .then((posts) => {
                setPosts(posts)
            })
    }, [type])
    return (
        <div>
            {tabs.map((tab) => {
                return <button
                    key={tab}
                    style={type === tab ? {
                        color: `#fff`,
                        background: "#333"
                    } : {}}
                    onClick={() => setType(tab)}
                >
                    {tab}
                </button>
            })}
            <input type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <ul>
                {posts.map((post) => {
                    return <li key={post.id}>{post.title || post.name}</li>
                })}
            </ul>
        </div>

    )
}
export default Content;