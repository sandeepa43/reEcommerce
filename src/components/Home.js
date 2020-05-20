import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import { addToCart } from './actions/cartActions'
const header_image = require('../public/header-image.png');
const women_collection = require('../public/women-collection.png');
const men_collection = require('../public/men-collection.png');
const header_icon = require('../public/Capture.JPG');
const white_card = require('../images/white-cart.png');
 class Home extends Component{
    state={
        showProduct:false,
    };
    onClick=()=>{
        const product = this.state.showProduct;
        this.setState({
            showProduct:!product
        })
    }

    handleClick = (id)=>{
        this.props.addToCart(id); 
    }

    render(){
        let itemList = this.props.items.map(item=>{
            return(
              
                <div className="box" key={item.id}>
                        <div>
                            
                            <img src={item.img} alt={item.title} style={{width:'100%'}}/>
                            
                            <span className="card-title" >{item.title}</span>
                            {/* <span   >fmksd</span> */}
                        </div>

                        <div className="card-content">
                            <p>{item.desc}</p>
                            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                            <p className="price"> ${item.price}</p>
                            <p className="cartButton" to="/" onClick={()=>{this.handleClick(item.id)}}><img src={white_card} style={{width:'1.6em',marginTop:'5px'}}/><span>Add To Cart</span></p>
                            </div>
                        </div>
                 </div>

            )
        })

        return(
            <div>
            <div>
                 <header style={{backgroundImage:`url(${header_image})`,backgroundPosition:'center',color:'white',padding:'2.2%',paddingLeft:'10%'}}>
      <nav style={{display:'flex',flexDirection:'row'}} >
        <img src={header_icon}/>
      <ul style={{marginLeft:'20vw'}}>
    
        <li style={{display:'inline',marginRight:'1.2em'}}>Home</li>
        <li style={{display:'inline',marginRight:'1.2em'}}>|</li>
        <li style={{display:'inline',marginRight:'1.2em'}}>About us</li>
        <li style={{display:'inline',marginRight:'1.2em'}}>|</li>
        <li style={{display:'inline',marginRight:'1.2em'}}>
        <Link to="/cart"> Shop</Link> 
          </li>
        <li style={{display:'inline',marginRight:'1.2em'}}>|</li>
        <li style={{display:'inline',marginRight:'1.2em'}}>blog</li>
        <li style={{display:'inline',marginRight:'1.2em'}}>|</li>
        <li style={{display:'inline',marginRight:'1.2em'}}>contact</li>
        <li style={{display:'inline',marginRight:'1.2em'}}>|</li>
        
      </ul>
      </nav>
      
      <div style={{marginTop:'7%'}}>
        <p style={{fontFamily: 'Playfair Display SC',fontSize:'3em'}}>Trend<br/>
        Fashion
        </p>
        <p style={{width:'25vw',fontFamily: 'Montserrat'}}>What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and 
          typesetting industry  
           and scramblbook it has</p>
      </div>
      <button style={{marginTop:'2%',marginBottom:'4%',backgroundColor:'#0654AE',border:'none',borderRadius:'25px',padding:'0.8em 2.5em 0.8em 2.5em',color:'white',textTransform:'uppercase' }}>Shopping Now</button>
      </header>
      <div>
          {this.state.showProduct ? null:(
  <div style={{marginLeft:'12%',display:'flex',flexDirection:'row',marginTop:'3%'
}}>
  <div onClick={()=>{this.onClick()}} style={{width:'40%',borderRadius:'15px',margin:'1.2%',backgroundImage:`url(${women_collection})`,backgroundPosition:'center', backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top center'}}>
  <p   style={{backgroundColor:'#2626264D',width:'100%',marginTop:'100%',padding:'1.2em 0 1.2em 0',textAlign:'center',color:'white'}}>Women Collection</p>
  </div>
  <div style={{width:'40%',borderRadius:'15px',margin:'1.2%',backgroundImage:`url(${men_collection})`,backgroundPosition:'center', backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top center'}}>
  <p style={{backgroundColor:'#2626264D',width:'100%',marginTop:'100%',padding:'1.2em 0 1.2em 0',textAlign:'center',color:'white'}}>men Collection</p>
  </div>
</div>)}
      </div>
            </div>
            {this.state.showProduct ?
            <div className="container">
                <h3 className="product-heading">Product</h3>
                <div 
                // style={{display:'flex',flexDirection:'row',justifyContent:'center'}}
                 >
                    {itemList}
                </div>
            </div>:null}
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)
