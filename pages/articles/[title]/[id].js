import {useRouter} from 'next/router'

const SinglePage= ()=>{
    const router = useRouter()
    return(
        <>
            <h1>SinglePage</h1>
            <p>{router.query.title}</p>
            <p>{router.query.id}</p>
        </>
    )
}
export default SinglePage