async function loadPost () {
    const res = await fetch ('https://jsonplaceholder.typicode.com/posts/2')
    const data = await res.json()
    console.log(data);
}


async function Page({ params }) {

    await loadPost()
    return (
        <div>
            <h1>Post Page {params.postId}</h1>
        </div>
    )
}


export default Page