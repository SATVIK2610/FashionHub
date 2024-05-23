import React from 'react'
import './DescriptionBox.css'

function DescriptionBox() {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>AN e-commerce website is an online platform that facilitates buying and selling of products or servies over the internet to showcase their products, interact with customers, and conduct transactions without the need for a physical presencee. E-commerce websites have gained immense popularity due to their convenient accessibility, and the global reach they offer.</p>
            <p>E-commerce websites typically display products or sevices as detailed descriptions, images, prices, and any available variations(eg, sizes, colors). Each product usually has its own dedicated page with relavant information.</p>
        </div>
    </div>
  )
}

export default DescriptionBox