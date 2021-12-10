

export default function users(props){
    console.log(props.users[0].name)
    const {users}= props;
    return(
        <ul>
            {
                users?.map((user, i)=><li key={i}> {user.name} </li>)
            }
        </ul>
    )

}