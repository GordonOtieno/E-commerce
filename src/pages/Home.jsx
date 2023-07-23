import React from 'react'
import { Link } from 'react-router-dom'

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
              
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
