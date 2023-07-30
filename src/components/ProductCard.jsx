import React from 'react'
import ReactStars from 'react-rating-stars-component'
import { Link } from 'react-router-dom'

const ProductCard = () => {
    // const raingChanged = (newrating) =>{
    //   console.log(newrating);
    // }
  return (
    <div className='col-3'>
      <Link className="product-card position-relative">
      <div className="wishlist-icon position-absolute">
        <Link to=''>
          <img src="images/wish.svg" alt="wishlist" />
        </Link>
      </div>

        <div className="product-image">
            <img className='img-fluid' src="images/watch.jpg" alt="product image" />
            <img className='img-fluid' src="images/speaker.jpg" alt="product image" />
        </div>
        <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">Kids Headphones bulk 10 pack muli colored for students
            </h5>
            <p className="price">Ksh. 5000</p>
            <ReactStars 
            count={5}
            size={24}
            value='3'
            edit={false}
            activeColor='#ffd700'
            />
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-3">
           <Link to='#'>
            <img src="./images/prodcompare.svg" alt="Add car" />
            </Link>
            <Link to='#'>
            <img src="./images/add-cart.svg" alt="Add car" />
            </Link>
            <Link to='#'>
            <img src="./images/view.svg" alt="Add car" />
            </Link>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard
