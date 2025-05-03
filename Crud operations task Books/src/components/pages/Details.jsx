import { useEffect, useState } from "react";
import { get_book } from "../../services/books.service";
import { useParams,Link} from "react-router-dom";

function Details() {

   /* 
useParams is a hook in React Router DOM used to retrieve the values of parameters sent in the URL. 

How it works:
- It returns an object where each URL parameter is stored as a key-value pair (parameterName: parameterValue).
- To extract a specific parameter, use object destructuring ... syntax : let { key } = useParams(); or let key = useParams().key
- If the parameter name is incorrect or does not exist, the returned value will be undefined.

Example:
  - If the route is "/:id/:name" and the URL is "/123/john":
      let params = useParams(); // Returns { id: "123", name: "john" }
      
      let { name } = useParams(); // name = "john"
      
      let { notHere } = useParams(); // notHere = undefined (because the key doesn't exist)

  Note: The parameter names in useParams() must match exactly with the names defined in the route.
*/

    let {id}=useParams();


    const [book,SetBook]=useState({
        id:"",title:"",author:"",price:""
     })

     useEffect(()=>{
        get_book(id).then(res=>SetBook(res.data))
     },[])
    
    return (<>
    <h1 className="text-center fw-bold fs-1 mt-3">
        Welcome!
    </h1>

    <div className="card mx-auto my-4" style={{width:"24rem"}}>
        <h2 className="card-header">Title: {book.title} </h2>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">author: {book.author}</li>
                <li className="list-group-item">price: {book.price} </li>
            </ul>
          
    </div>

    <div className="d-flex justify-content-center">
    <Link to="/" className="btn btn-primary">Back :)</Link>
</div>



    
    </>  );
}

export default Details;