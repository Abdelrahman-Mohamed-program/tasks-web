import { useEffect, useRef, useState } from "react";
import { add_book } from "../../services/books.service";
import { useNavigate } from "react-router-dom";


function Create () {
    const [book,set_book]=useState ({title : "", author :"" , price : ""})
    
    const [AlertType,SetAlertType]=useState("danger")

    const focus_ref =useRef()

   const [BookAlert,SetBookAlert]= useState(false);

   useEffect(()=>{
    focus_ref.current.focus()
   },[])


   useEffect(()=>{
    
    SetBookAlert(false)
    
   },[book])
    /*useNavigate is used to change the current url and render the component of this url
        ex: const navigate =useNavigate()
            navigate("/")will go to the base url
    */

    const navigate=useNavigate();
  

 const add = async () => {
        if (book.title===""||book.author===""||book.price==="") {
           SetBookAlert(true);
        }else{ 
            await add_book(book); 
         navigate("/")
        }
    };


    return (<>
     <header className="my-3 mx-auto container w-30 text-center bg-dark text-light rounded-2 p-1">
    <h1 className="text-center ">All books</h1>
    </header>
 
 <section className="container my-3 mx-auto w-50">
        <form action="">
        <div className="form-group">
        <label htmlFor="title" className="fw-bold">
            Book Title</label><input type="text" placeholder="Enter book title" className="form-control" ref={focus_ref}
              onChange={e=>set_book({...book,title:e.target.value})} id="title" />
        </div>
        <div className="form-group">
        <label htmlFor="author" className="fw-bold">
            Book Author</label><input type="text" placeholder="Enter book author"  
            onChange={(e)=>set_book({...book,author:e.target.value})} className="form-control"  id="author" />
        </div>
        <div className="form-group">
        <label htmlFor="price" className="fw-bold">
            Book price</label><input type="text"  placeholder="Enter book price" 
           onChange={e=>set_book({...book,price:e.target.value})}  className="form-control" id="price" />
        </div>
        {BookAlert&& <div className = {`alert mt-3 alert-${AlertType}`} role="alert">
                  please fill all inputs
                </div>
                }
        <div className="d-flex justify-content-center mt-3">
    <button type="button" className="btn btn-success"  onClick={add} style={{width:"100px"}}>Add</button>
    </div>
        </form>
 </section>
</> );
}


export default Create;