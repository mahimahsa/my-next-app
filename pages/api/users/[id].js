

export default (req, res)=>{

    const {query : {id}}= req
    let user= {
        name: "mahsa",
        id: id
    }

    res.statusCode= 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({data: user, status: 'success'}))
}
