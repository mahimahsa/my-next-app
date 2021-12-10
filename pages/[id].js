

const SinglePost= (props)=>{
const posts= props.posts

    return(
        <>
            {posts ?
                <div>
                    <h2>id: {posts?.id}</h2>
                    <p>{posts?.title}</p>
                </div>
                :
                <div>
                    no post exist
                </div>
            }
            </>
    )
}
export async function getStaticPaths(){
    return {
        paths: [
            '/1',
            '/2',
            '/3'
        ],
        fallback: true
    }
}

export async function getStaticProps() {

    let res= await fetch(`https://jsonplaceholder.typicode.com/posts/3`)
    let data= await res.json();
    return {
        props: {
            posts: data
        }
    }
}


export default SinglePost