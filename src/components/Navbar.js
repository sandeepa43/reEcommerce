import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom'
const wishlist_img = require('../images/wishlist.png');
const cart_img = require('../images/cart.png');
 const Navbar = ()=>{
    return(
            <nav className="navbar">   
                    <p style={{color:'#0654AE',fontWeight:'bold'}}>Language | USD</p>
                    <ul className="nav-wrapper" >
                    {/* <Link to="/">Shopping</Link> */}
                     <input type="text" placeholder="Search.." name="search" style={{marginRight:'1em',borderRadius:'5px'}}/>
                    <img src={wishlist_img} className="nav-img"/><li className="nav-li"><Link to="/">Wishlist</Link></li>
                    <li className="nav-li">|</li>
                       <img src={cart_img} className="nav-img"/> <li className="nav-li"><Link to="/cart">cart</Link></li>
                       <li className="nav-li">|</li>
                    </ul>
            
            </nav>  
    )
}

export default Navbar;