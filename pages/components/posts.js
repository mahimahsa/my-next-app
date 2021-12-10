import Link from 'next/link';

const Posts = props => {
console.log(props)
console.log("props")
    return (
        <ol>
            <li>
                salam
            </li>
            {
                props.posts.map(post => {
                    return (
                        <li key={post.id}>
                            <Link href="/posts/[id]" as={`/posts/${post.id}`}>
                                <a>{post.title}</a>
                            </Link>
                        </li>
                    )
                })
            }
        </ol>
    )
}

export default Posts;