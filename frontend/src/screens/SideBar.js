import React from "react";
import { Route, Link } from "react-router-dom";
const SideBar = () => {
  return (
    <React.Fragment>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
        style={{ maxWidth: "280px" , height:"600px"}}
      >
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <svg className="bi me-2" width="40" height="32">
            <use href="#bootstrap"></use>
          </svg>
          <span className="fs-4">Shoping Catagory</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a href="#" className="nav-link " aria-current="page">
              <svg className="bi me-2" width="16" height="16">
                <use href="#home"></use>
              </svg>
              <Link className=" text-white" to="/category/Shirts">
                Shirts
              </Link>
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              <svg className="bi me-2" width="16" height="16">
                <use href="#speedometer2"></use>
              </svg>
              <Link className=" text-white" to="/category/Paint">
                Paint
              </Link>
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              <svg className="bi me-2" width="16" height="16">
                <use href="#table"></use>
              </svg>
              <Link className=" text-white" to="/category/Shoes">
                Shoes
              </Link>
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              <svg className="bi me-2" width="16" height="16">
                <use href="#grid"></use>
              </svg>
              <Link className=" text-white" to="/category/watch">
                Watch
              </Link>
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              <svg className="bi me-2" width="16" height="16">
                <use href="#people-circle"></use>
              </svg>
              <Link className=" text-white" to="/category/underwear">
                Underwear
              </Link>
            </a>
          </li>
        </ul>
        <hr />
       
      </div>
    </React.Fragment>
  );
};

export default SideBar;
