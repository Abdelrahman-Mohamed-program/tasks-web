import { useEffect, useState } from "react";
import { EditBook, get_book } from "../../services/books.service";
import { useParams,Link, useNavigate} from "react-router-dom";
function Edit () {

    let {id}=useParams();

    const [book,SetBook]=useState({
       title: "",
      author: "",
      price: ""
    })

    const navigate =useNavigate()

    useEffect(()=>{
        get_book(id).then(res=>SetBook(res.data))
    },[])



    function OnSubmit(e){
        e.preventDefault()
        EditBook(book.id,book)
        navigate("/")
    }

    return (<>
 
  <div className="card p-4 my-3 mx-auto" style={{maxWidth:"40rem"}}>
        <h1 className="text-center fs-2 mb-3">Edit book</h1>
        
 <form action="submit" className="container" onSubmit={OnSubmit}>
    
    <div className="input-group mb-3">
        <span className="input-group-text">Title</span>
        <input type="text" value={book.title} onChange={e=>SetBook({...book,title:e.target.value})} className="form-control"/>
    </div>


   <div className="input-group mb-3">
        <span className="input-group-text">Author</span>
        <input type="text" value={book.author} onChange={e=>SetBook({...book,author:e.target.value})} className="form-control"/>
    </div>

    <div className="input-group mb-3">
        <span className="input-group-text">price</span>
        <input type="text" value={book.price} onChange={e=>SetBook({...book,price:e.target.value})} className="form-control"/>
    </div>

    <div className="d-flex">
      <button type="submit" style={{width:"8rem"}} className="btn btn-primary mx-auto">Submit edits!</button>
    </div>


  </form>
 </div>
    
    </> );
}

export default Edit;