

const handler = (req , res) => {
    console.log(req.method);
    let users = [
        { id : 1 , name : 'hesam'},
        { id : 2 , name : 'ali'}
    ]

    res.end(JSON.stringify({ data: users , status : 'success'}))
}

export default handler;