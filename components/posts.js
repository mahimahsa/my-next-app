import Link from 'next/link';

const Posts = props => {

    return (
        <ul>
            {
                props?.posts?.map(post => {
                    return (
                        <li key={post.id}>
                            <Link href="/posts/[id]" as={`/posts/${post.id}`}>
                                <a>{post.title}</a>
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}
export async function getStaticProps() {
    console.log("is it call?")
    let res = await fetch('https://jsonplaceholder.typicode.com/posts');
    let posts = await res.json();
console.log(posts)


    return {
        props : {
            posts

        }
    }

}
export default Posts;