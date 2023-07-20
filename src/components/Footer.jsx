import React from 'react'
import { BsLinkedin,BsGithub,BsFacebook,BsYoutube,BsInstagram } from "react-icons/bs";
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <footer className='py-3'>
      <div className="container-xxl">
        <div className="row align-items-centre">
          <div className="col-5 ">
            <div className="footer-top-data d-flex gap-30 align-items-center">
            <img src="./images/newsletter.png" alt="News Letter" />
            <h2 className='text-white mb-0'>Sign Up For Newsletter</h2>
            </div>
          </div>
          <div className="col-7">
          <div class="input-group">
                <input type="text" class="form-control py-1" placeholder="Enter Email ..." aria-label="Enter Email ......" aria-describedby="basic-addon2" />
                <span class="input-group-text py-2 text-white" id="basic-addon2"> Subscribe</span>
              </div>
          </div>
        </div>
      </div>
    </footer>
    <footer className='py-3'>
      <div className="container-xxl">
        <div className="row">
           <div className="col-4">
            <h4 className='text-white'>Contact Us</h4>
            <div className="">
              <address className='text-white'>
                P.O Box 40102 - 0100 <br /> Nairobi Kenya <br />               
              </address>
              <a href="tel:+254732971173" className='d-block mb-3 text-white'>+254732971173</a>
              <a href="mailto:otienogordon95@gmail.com" className='d-block mb-2 text-white'>otienogordon95@gmail.com</a>
              <div className="social-icons d-flex gap-10 align-items-center">
                <a href="#" className='text-white fs-5'><BsLinkedin /></a>
                <a href="#" className='text-white fs-5'><BsGithub /></a>
                <a href="#" className='text-white fs-5'><BsFacebook /></a>
                <a href="#" className='text-white fs-5'><BsYoutube /></a>

              </div>
            </div>
            </div>
           <div className="col-3">
            <h4 className='text-white'>Information</h4>
            <div className="footer-links d-flex flex-column">
              <Link className='text-white py-1 mb-1'>Privacy Policy</Link>
              <Link className='text-white py-1 mb-1'>Refund Policy</Link>
              <Link className='text-white py-1 mb-1'>Shipping Policy</Link>
              <Link className='text-white py-1 mb-1'>Terms & condition</Link>
              <Link className='text-white py-1 mb-1'>Blogs</Link>
            </div>
            </div>
           <div className="col-3">
            <h4 className='text-white'>Account</h4>
            <div className="footer-links d-flex flex-column">
              <Link className='text-white py-1 mb-1'>About Us</Link>
              <Link className='text-white py-1 mb-1'>Freq</Link>
              <Link className='text-white py-1 mb-1'>Contact</Link>
            </div>
            </div>
           <div className="col-2">
            <h4 className='text-white'>Quick Links</h4>
            <div className="footer-links d-flex flex-column">
              <Link className='text-white py-1 mb-1'>Laptops</Link>
              <Link className='text-white py-1 mb-1'>Headphones</Link>
              <Link className='text-white py-1 mb-1'>Tablets</Link>
              <Link className='text-white py-1 mb-1'>Watches</Link>
            </div>
            </div>
        </div>
      </div>
    </footer>
    <footer className='py-4'>
      <div className="container-xxl">
        <div className="row">
          <div className="col-12 d-flex justify-content-between">
            <p className="text-center mb-0 text-white">
              &copy; {new Date().getFullYear()} Powered By Digitic
            </p>
            <div className="partners text-white d-flex">
              rrtgrg
            </div>
          </div>
        </div>
      </div>
    </footer>

    </>
  )
}

export default Footer