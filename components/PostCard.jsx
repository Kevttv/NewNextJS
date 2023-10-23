"use client"

function PostCard({ post }) {

    return (
        <div><div key={post.id}>
            <h3>{post.id}. {post.title}</h3>
            <p>{post.body}</p>
            <button onClick={() => {
                alert('Esto funciona')
            }}>Click</button>
        </div></div>
    )

}

export default PostCard