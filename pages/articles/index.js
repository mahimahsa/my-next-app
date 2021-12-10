import {useRouter} from 'next/router'
import Link from 'next/link'
import {useEffect, useState} from 'react'

const Article = (props) => {
    const router = useRouter();
    const articleList= props?.data;
    //const [articleList, setArticleList]= useState([]);

/*    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res)=>res.json())
            .then((data)=>setArticleList(data))

    },[])*/

    return (
        <>
            <p>
                <h1>title: some static html</h1>
                <h3>{router.query.title}</h3>
            </p>
            <p>
                id:
                <h3>{router.query.id}</h3>
            </p>
            {
                articleList?.map((article ,i)=>
                    <div key={i}>
                        <text>{article?.id}:</text>{'  '}
                        <Link href="/articles/[title]/[id]"  as={`/articles/${article?.title}/${article?.id}`}>
                            <a style={{color: 'green'}}> {article?.title}</a>
                        </Link>
                    </div>
                )
            }
        </>
    )
}
export async function getServerSideProps(){

        let res= await fetch("https://jsonplaceholder.typicode.com/posts");
        let data= await res.json();
        console.log(data)
        return {
            props: {data}
        }
}

export default Article