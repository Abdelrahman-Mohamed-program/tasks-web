import { useEffect, useState } from "react";
function Home () {


 const [posts,set_posts]=useState([])
 const [query,setQuery]=useState("")
 



 useEffect(() => {
   axios.get('http://localhost:3000/posts')
     .then(res => set_posts(res.data))
     .catch(console.error);
 }, []);




//  useEffect(() => {
//   set_posts([ 
//    {title:"coocking",desc:"A cooking post"},
//    {title:"teaching",desc:"A teaching post"},
//    {title:"coding",desc:"A cookcodinging post"},
// ])
//  }, []); test in case fail of fetching



 
    

    return ( <>
    <header className="my-3 mx-auto container w-30 text-center bg-dark text-light rounded-2 p-1">
    <h1 className="text-center ">All Posts</h1>
    </header>


 <section className="my-5 container text-center">

 <input
  type="text"
  className="form-control mb-3"
  placeholder="Search posts..."
  value={query}
  onChange={e => setQuery(e.target.value)}
/>

    <table className="table table-hover">
        <thead>
            <tr>
                <th></th>
                <th>Title</th>
                <th>descreption</th>
            </tr>
        </thead>
        {posts.length>0&&
    <tbody>
    {posts
      .filter(post =>
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.desc.toLowerCase().includes(query.toLowerCase())
      )
      .map((post, index) => (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{post.title}</td>
          <td>{post.desc}</td>
        </tr>
      ))}
  </tbody>
     }
    </table>
 </section>


    </> )
}

export default Home;