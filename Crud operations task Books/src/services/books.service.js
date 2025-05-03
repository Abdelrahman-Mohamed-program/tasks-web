import axios from "axios";

const url ="http://localhost:3000/books";//local url end point from json server

//Get All books
export async function get_books(){
    return await axios.get(url)//getting the data from the end point in an object called (data) from the response

    //get function in axios can do multiaple things like editing end point not just getting response but it mostly used for getting the data
}


//add book
export async function add_book(book){
    /*post function used to add an object to the end point 
        syntax : axios.post(url,object)               
   */
   return await axios.post(url,book)
}

//get one book
export async function get_book(id){
    return await axios.get(`${url}/${id}`)/*every object in the end points have a url which is (http://localhost:3000/array_name/object_id)
                                          and to get this object alone you have to send its url to axois.get */
}


//edit book
export async function EditBook(id,book){
    await axios.put(`${url}/${id}`,book)//put is a function used to edit or replace and objects at specific url
}

//delete book
export async function delete_book(id) {
    await axios.delete(`${url}/${id}`); // ✅ Pass the ID in the URL
}

