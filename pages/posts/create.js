import {useState} from 'react';

const CreatePost =()=>{

    const [form, setForm]= useState({
        title: '', body: ''
    });
    const changeHandler=(e)=>{
        setForm({...form, [e.target.name] : e.target.value})
    }
    const submitHandler= async (e)=>{
        e.preventDefault();
        const res = await fetch("http://localhost:3000/api/create",
            {
                method: "POST",
                body: JSON.stringify(form),
                headers: {"Content-Type": "application/json"}
            })
        const data= await res.json();

        console.log(data);
    }
    return(
        <>
           <form onSubmit={submitHandler}>
               <div>
                   title:
                   <input type="text" name="title" onChange={changeHandler}/>
               </div>
               <div>
                   body:
                   <textarea name="body" onChange={changeHandler}/>
               </div>
               <div>
                   <button type="submit">submit</button>
               </div>
           </form>
        </>
    )
}
export default CreatePost