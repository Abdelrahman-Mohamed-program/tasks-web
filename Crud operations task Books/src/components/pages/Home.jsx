import { useEffect, useState } from "react";
import { delete_book,  get_books } from "../../services/books.service";
import { Link } from "react-router-dom";
function Home () {


 const [books,set_books]=useState([])




 useEffect(()=>{
    get_books().then(res=>set_books(res.data))//response .data is the array of objects you want
 }
,[])


async function del(id) {
    await delete_book(id); // ✅ Directly call delete_book with the correct ID
    set_books(books.filter(book => book.id !== id)); 
}


 
    

    return ( <>
    <header className="my-3 mx-auto container w-30 text-center bg-dark text-light rounded-2 p-1">
    <h1 className="text-center ">All books</h1>
    </header>

 <section className="my-5 container text-center">
    <table className="table table-hover">
        <thead>
            <tr>
                <th>ID </th>
                <th>Title</th>
                <th>Price</th>
                <th>Author</th>
                <th>Actions</th>
            </tr>
        </thead>
        {books.length>0&&
     <tbody>
     {books.map((book)=>(
       <tr key={book.id}>
        <td>{book.id}</td>
        <td>{book.title}</td>
        <td>{book.price}</td>
        <td>{book.author}</td>

        <td>
            <Link className="btn btn-primary btn-sm mx-1" to={"/details/"+book.id}>show</Link>
            <Link className="btn btn-success btn-sm mx-1" to={`edit/${book.id}`}>edit</Link>
            <Link className="btn btn-danger btn-sm mx-1"  onClick={(e)=>del(book.id)}>delete</Link>
        </td>
       </tr>
          )
        )}
        </tbody>
     }
    </table>
 </section>


    </> )
}

export default Home;