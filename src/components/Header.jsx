import React from 'react'
import {BsSearch} from 'react-icons/bs'
import { Link,NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
               <p className='text-white mb-0'>Free shipping of Over $100, Free returns</p>
            </div>
            <div className="col-6">
              <p className='text-end text-white mb-0'>Hotline: <a className='text-white' href='tel:+254732971173'>+254732971173</a></p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h3>
                <Link className='text-white'>Digitic.</Link>
              </h3>
            </div>
            <div className="col-5">
              <div class="input-group">
                <input type="text" class="form-control" placeholder="Search Products Here ..." aria-label="Search Products Here ..." aria-describedby="basic-addon2" />
                <span class="input-group-text" id="basic-addon2"> <BsSearch /></span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
               <div className="">
                <Link className='d-flex align-items-center gap-10 text-white'>
                  <img src="./images/compare.svg" alt="compare" />
                  <p className='mb-0'>Compare <br /> Products</p>
                </Link>
               </div>
               <div className="">
                <Link className='d-flex align-items-center gap-10 text-white'>
                 <img src="./images/wishlist.svg" alt="WishList" />
                 <p className='mb-0'>Fouvarite <br /> WishList</p>
                </Link>
               </div>
               <div className="">
                <Link className='d-flex align-items-center gap-10 text-white'>
                <img src="./images/user.svg" alt="User" />
                <p className='mb-0'>Login <br /> My Account</p>
                </Link>
               </div>
               <div className="">
                <Link className='d-flex align-items-center gap-10 text-white'>
                <img src="./images/cart.svg" alt="User" />
                <div className='d-flex flex-column gap-1'>
                  <span className='badge bg-white text-dark d-inline '>O</span>
                  <p className='text-white d-inline'>Ksh.O</p>
                </div>
                
                </Link>
               </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-botton py-3">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="menu-buttons d-flex align-items-center gap-15">
            <div className="dropdown">
            <button className="btn d-flex align-items-center gap-15 btn-secondary dropdown-toggle bg-transparent border-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              <img src="./images/menu.svg" alt="meni Icon" />
              <span className='me-3 d-inline-block'>Show Categories</span>
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><Link className="dropdown-item text-white" to="#">Action</Link></li>
              <li><Link className="dropdown-item text-white" to="#">Another action</Link></li>
              <li><Link className="dropdown-item text-white" to="#">Something else here</Link></li>
            </ul>
          </div>
              <div className="menu-links">
                <div className="d-flex align-items-center gap-15 ">
                  <NavLink to='/' >Home</NavLink>
                  <NavLink to='/store' >Our Store</NavLink>
                  <NavLink to='/blog' >Blogs</NavLink>
                  <NavLink to='/contact' >Contact</NavLink>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      </header>
    </>
  )
}

export default Header
