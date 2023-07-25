import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee'
import ProductCard from '../components/ProductCard'
import BlogCard from '../components/BlogCard'

const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative p-3">
                <img src="./images/main-banner-1.jpg" alt="Main Banner"  
                  className='img-fluid rounded-3'
                  />
                  <div className="main-banner-content position-absolute">
                    <h4>SUPERCHARGED FOR PROS</h4>
                    <h5>ipad S5 + Pro</h5>
                    <p>Price Ksh:26000</p>
                    <Link className='button btn mt-4'>Buy Now</Link>
                  </div>
              </div>

            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap justify-content-between align-items-center gap-3">
                <div className="smallbanner- position-relative">
                  <img src="./images/catbanner-01.jpg" alt="Main Banner"  
                    className='small-banner-img img-fluid rounded-3 '
                    />
                  <div className="small-banner-content position-absolute">
                    <h4>15% off</h4>
                    <h5 className='text-dark'> Laptop Max</h5>
                    <p>Price Ksh:26000</p>
                  </div>
              </div>

              <div className="small-banner position-relative">
                  <img src="./images/catbanner-02.jpg" alt="Main Banner"  
                    className='small-banner-img img-fluid rounded-3'
                    />
                  <div className="small-banner-content position-absolute">
                    <h4>Best Sale</h4>
                    <h5 className='text-dark'>Buy ipad Air </h5>
                    <p>Price Ksh:25000</p>
                  </div>
              </div>

              <div className="small-banner position-relative">
                  <img src="./images/catbanner-03.jpg" alt="Main Banner"  
                    className='small-banner-img img-fluid rounded-3'
                    />
                  <div className="small-banner-content position-absolute">
                    <h4>New Arrival</h4>
                    <h5 className='text-dark'>Smart Watch 7</h5>
                    <p>Price Ksh:11000</p>
                  </div>
              </div>
              <div className="small-banner position-relative">
                  <img src="./images/catbanner-04.jpg" alt="Main Banner"  
                    className='small-banner-img img-fluid rounded-3'
                    />
                  <div className="small-banner-content position-absolute">
                    <h4>Free Engravine</h4>
                    <h5 className='text-dark'>AirPods Max</h5>
                    <p>High Quality,<br /> Price Ksh:11000</p>
                  </div>
              </div>
              
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-centre justify-content-between gap-3">
                <div className="d-flex gap-4 align-items-center">
                  <img src="./images/service.png" alt="Service1" />
                  <div>
                  <h6>Free Shipping</h6>
                  <p className='p-0'>From all orders of over Ksh. 50000</p>
                  </div>
                </div>
                <div className="d-flex gap-4 align-items-center">
                  <img src="./images/service-02.png" alt="Service1" />
                 <div> 
                  <h6>Daily Service Offers</h6>
                  <p className='p-0'>Save Upto 25% off</p></div>
                </div>
                <div className="d-flex gap-4 align-items-center">
                  <img src="./images/service-03.png" alt="Service1" />
                  <div>
                  <h6>Support 24/7</h6>
                  <p className='p-0'>Shop with an Expert</p>
                  </div>
                </div>
                <div className="d-flex gap-4 align-items-center">
                  <img src="./images/service-04.png" alt="Service1" />
                  <div>
                  <h6>Affordable Prices</h6>
                  <p className='p-0'>Get Factory direct prices</p>
                  </div>
                </div>
                <div className="d-flex gap-4 align-items-center">
                  <img src="./images/service-05.png" alt="Service1" />
                  <div>
                  <h6>Secure payment</h6>
                  <p className='p-0'>100% protected Payment Systems</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-3 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
            <div className="categories card-wrapper d-flex flex-wrap align-items-center justify-content-center">
              <div className="d-flex align-items-center align-items-center">
                <div>
                  <h6>Computers & Laptops</h6>
                  <p>8 Item(s)</p>
                </div>
                <img src="./images/laptop.jpg" alt="computer" />
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <h6>Cameras & Videos</h6>
                  <p>2 Item(s)</p>
                </div>
                <img src="./images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <h6>Smart TVs</h6>
                  <p>9 Item(s)</p>
                </div>
                <img src="./images/tv.jpg" alt="Tvs" />
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <h6>SmartWatches</h6>
                  <p>7 Item(s)</p>
                </div>
                <img src="./images/laptop.jpg" alt="watches" />
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <h6>Music & Gaming</h6>
                  <p>8 Item(s)</p>
                </div>
                <img src="./images/laptop.jpg" alt="music and gaming" />
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <h6>Mobile & Tablets</h6>
                  <p>6 Item(s)</p>
                </div>
                <img src="./images/laptop.jpg" alt="tablets" />
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <h6>HeadPhones</h6>
                  <p>6 Item(s)</p>
                </div>
                <img src="./images/laptop.jpg" alt="headphones" />
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <h6>Accessories</h6>
                  <p>6 Item(s)</p>
                </div>
                <img src="./images/acc.jpg" alt="Accessories" />
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <h6>Portable Speakers</h6>
                  <p>3 Item(s)</p>
                </div>
                <img src="./images/speaker.jpg" alt="speakers" />
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <h6>Home Appliances</h6>
                  <p>6 Item(s)</p>
                </div>
                <img src="./images/homeapp.jpg" alt="home Appli." />
              </div>

              </div>
              
            </div>
          </div>
        </div>
      </section>
      <section className="marquee-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
                <Marquee className='d-flex'>
                 <div className='mx-4 w-20'>
                  <img src="images/brand-01.png" alt="brand image" />
                 </div>
                 <div className='mx-4 w-20'>
                  <img src="images/brand-02.png" alt="brand image" />
                 </div>
                 <div className='mx-4 w-25'>
                  <img src="images/brand-03.png" alt="brand image" />
                 </div>
                 <div className='mx-4 w-20'>
                  <img src="images/brand-04.png" alt="brand image" />
                 </div>
                 <div className='mx-4 w-20'>
                  <img src="images/brand-05.png" alt="brand image" />
                 </div>
                 <div className='mx-4 w-20'>
                  <img src="images/brand-06.png" alt="brand image" />
                 </div>
                 <div className='mx-4 w-20'>
                  <img src="images/brand-07.png" alt="brand image" />
                 </div>
                 <div className='mx-4 w-20'>
                  <img src="images/brand-08.png" alt="brand image" />
                 </div>
                </Marquee>

              </div>
            </div>
          </div>
        </div>

      </section>
      <section className="blog-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h2 className='p-3'>Featured Collection</h2>
              <div className="blogs d-flex gap-4">
                 <ProductCard />
                 <ProductCard />
                 <ProductCard />
                 <ProductCard />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h2 className='p-3'>Our Latest News</h2>
              <div className="blogs d-flex gap-4">
                 <BlogCard />
                 <BlogCard />
                 <BlogCard />
                 <BlogCard />
                          
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
