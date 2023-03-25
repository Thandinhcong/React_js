
// //1. useEfffect (callback);
// -- gọi callback mỗi khi conponent re-reander
//2. useEfffect (callback,[]);
//3. useEfffect (callback,[deps]);

import { useEffect, useState } from "react";

//-------------------

// 1. callback luôn được gọi sau khi conponent mounted
const tabs = ['posts', 'comments', 'albums']
function Content() {
    const [posts, setPosts] = useState([]);
    const [type, setType] = useState('posts');
    const [showGoToTop, setGoToTop] = useState(false)
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then((response) => response.json())
            .then((posts) => {
                setPosts(posts)
            })
    }, [type])
    useEffect(() => {
        const handlScroll = () => {
            if (window.scrollY >= 200) {
                setGoToTop(true);
            }
            else {
                setGoToTop(false)
            }
        }
        window.addEventListener("scroll", handlScroll);
        console.log("addEventListener :");
        //cleanup function 
        return () => {
            window.removeEventListener("scroll", handlScroll)
            console.log("removeEventListener :");
        }
    }, [])
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

            <ul>
                {posts.map((post) => {
                    return <li key={post.id}>{post.title || post.name}</li>
                })}
            </ul>
            {showGoToTop && (
                <button
                    style={{
                        position: "fixed",
                        top: 20,
                        right: 20,
                    }}
                >
                    go to top

                </button>
            )}
        </div>

    )
}
export default Content;