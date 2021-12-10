

export default function users(props){
    const {users}= props;
    return(
        <ul>
            {
                users?.map((user)=>{
                    <li> {user.name} </li>
                })
            }
        </ul>
    )

}