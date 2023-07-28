import React from 'react'
import ReactStars from 'react-rating-stars-component'

const ProductCard = () => {
    // const raingChanged = (newrating) =>{
    //   console.log(newrating);
    // }
  return (
    <div className='col-3'>
      <div className="product-card">
        <div className="product-image">
            <img src="images/watch.jpg" alt="product image" />
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
      </div>
    </div>
  )
}

export default ProductCard
