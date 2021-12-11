

export default (req, res)=>{

    const body= req.body;
    console.log(body)
    if(req.method === "POST"){
        res.status(200).json({data: body, status: "success"})
    }
    else {
        res.status(404).json({data: "page not found" , status: "error"})
    }

}