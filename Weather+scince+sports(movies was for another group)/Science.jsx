import { useEffect, useState } from "react"

function Science() {
const [news,set_news]= useState([])


useEffect(()=>{
            fetch('https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=9117bdbf77ad459c883984ed2898fc72')
            .then(res=>res.json())
            .then(body=>set_news(body.articles))
        }
    ,[])

    useEffect(()=>{console.log(news)},[news])
    return (<>
        <h1 className="text-center mx-py-15 fs-15 my-4">Science news</h1>


{news.length>0&& 
    <div className="row">
  {news.map((item, index) => (
    <div key={index} className="col-md-4 mb-3">
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-header">
          Author: {item.author}
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Title: {item.title}</li>
          <li className="list-group-item">Description: {item.description}</li>
        </ul>
      </div>
    </div>
  ))}
</div>

}
       
    </>  );
}

export default Science;