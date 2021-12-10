import fetch from 'node-fetch';

const SinglePost = props => {
    const { post } = props;
    return (
        <>
            <h2>{post.title}</h2>
            <p>{post.body}</p>            
        </>
    )
}

export async function getStaticPaths() {

    let res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    let posts = await res.json();

    let paths = posts.map(post => {
        return { params : { id : post.id.toString() }}
    })

    return {
       paths,
       fallback : false
    }
}


export async function getStaticProps({ params }) {

    let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    let post = await res.json();
    

    return {
        props : {
            post 
        }
    }
}

export default SinglePost;