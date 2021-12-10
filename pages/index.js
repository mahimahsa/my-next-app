import Link from 'next/link'
import fetch from 'node-fetch';

// Components
import PostsList from './../components/posts';
import UserList from './../components/users';
import NavBar from './../components/navbar'

const Home = props => {
    return (
        <>
            <h2>Hello Roocket</h2>
            <NavBar />
            <h2>Users List</h2>
            <UserList users={props.users} />
            <h2>Blog Posts</h2>
            <PostsList posts={props.posts} />

        </>
    )
}

export async function getStaticProps() {
    let res;
     res = await fetch('https://jsonplaceholder.typicode.com/posts');
    let posts = await res.json();

     res = await fetch('http://localhost:3000/api/users');
    let users = await res.json();
    
    return {
        props : {
            posts,
            users: users.data
        }
    }
    
} 

export default Home;
