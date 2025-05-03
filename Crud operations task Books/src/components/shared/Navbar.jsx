import { Link } from "react-router-dom"
export default function Navbar(){
  return(
    <>
     <nav className="navbar navbar-expand-lg text-light navbar-dark bg-dark">
  <div className="container ">
    <Link className="navbar-brand fw-bold fs-2" to="/">Backend</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNav">
      <ul className="navbar-nav d-flex w-100 justify-content-end ">
        <li className="nav-item text-light mx-2 fs-5">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item mx-2 fs-5">
          <Link className="nav-link " to="/create">Create</Link>
        </li>

      </ul>
    </div>
  </div>
</nav>

    </>
  )
}