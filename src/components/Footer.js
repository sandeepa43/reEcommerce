import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom'
const wishlist_img = require('../images/wishlist.png');
const cart_img = require('../images/cart.png');
 const Navbar = ()=>{
    return(
            <footer>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:'75%',marginLeft:'10%'}}>
                    <ul className="footer-list">
                        <li>Status</li>
                        <li>Contact Us</li>
                    </ul>
                    <ul className="footer-list">
                        <li>Copyright @ 2019, Template</li>
                    </ul>
                </div>
            </footer>
    )
}

export default Navbar;