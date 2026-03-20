import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container">
          <a class="navbar-brand fw-bold" href="#">MyBrand</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">

              <Link to={"/counter"} class="nav-item">
                <a class="nav-link" href="#">Counter</a>
              </Link>
              <Link to={"/getinputvalue"} class="nav-item">
                <a class="nav-link" href="#">GetInputValue</a>
              </Link>
              <Link to={"/getinputvalueusingobject"} class="nav-item">
                <a class="nav-link" href="#">GetInputValue2</a>
              </Link>
              <Link to={"/crudopretion"} class="nav-item">
                <a class="nav-link" href="#">CrudOpration</a>
              </Link>
              <Link to={"/adminlogin"} class="nav-item text-decoration-none">
                <a class="nav-link">Admin Login</a>
              </Link>
                <Link to={"/contact"} class="nav-item text-decoration-none">
                <a class="nav-link">Contact</a>
              </Link>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink"
                  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  More
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a class="dropdown-item" href="#">About Us</a></li>
                  <li><a class="dropdown-item" href="#">Contact</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><a class="dropdown-item" href="#">Support</a></li>
                </ul>
              </li>
            </ul>

            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search..." aria-label="Search" />
              <button class="btn btn-light" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

    </>
  )
}

export default Header;