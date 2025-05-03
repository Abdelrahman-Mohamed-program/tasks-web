import { useEffect, useState } from "react"

function Weather() {
 
     const [citys,set_citys]=useState([])
     const [search_city,set_search]= useState([])
     const [check,set_check]=useState(false)
     useEffect(
         ()=>{
            fetch('https://mocki.io/v1/21a8bcac-f82e-4ec5-be87-1d3af80679f0')
            .then(res => res.json())
            .then(data => set_citys(data))}
     ,[])
 

 
         useEffect(()=>{console.log(search_city);
         
         
         },[search_city])


     const check_button=()=>{if (search_city.length>0) {
     set_check(true)
     }

     }
     return(<>
     <div className="container my-4">
         <input type="search" name="" placeholder="Enter the City" id="" onChange={
             (event)=>{set_check(false)
                if(event.target.value.length==0){set_search([])}else
       set_search(citys.filter((city)=>(city.city.toLocaleLowerCase()==event.target.value.toLocaleLowerCase()) ) )}
         } />
         <button type="button" className="btn btn-success" onClick={check_button}>Search</button>
     </div>
     <h1 className="text-center mx-py-15 fs-15 my-4">Weather</h1>
 
    
 <div className="py-50 my-40" style={ {"marginBottom":"560px"}}>
     <h1> Search list</h1>
     {
     check&&
     <table className="table">
         <thead>
     <tr>
     <th scope="col">ID</th>
       <th scope="col">City</th>
       <th scope="col">Condition</th>
       <th scope="col">Temperature</th>
     </tr>
   </thead>
   <tbody>
         {search_city.map((city)=>(
 <tr key={city.id}>
 <th scope="row">{city.id}</th>
        <td>{city.city}</td>
       <td>{city.condition}</td>
       <td>{city.temperature}</td>
       
 </tr>
         ))}
     </tbody>
 </table>
   } 
   </div>
   
     </>)
 }

export default Weather;