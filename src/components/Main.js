import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {connect} from 'react-redux';
import '../index.css';
const header_image = require('../public/header-image.png');
const women_collection = require('../public/women-collection.png');
const men_collection = require('../public/men-collection.png');
const header_icon = require('../public/Capture.JPG');

class Main extends Component {
  render(){
  return (
    <main>
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
  <div style={{marginLeft:'12%',display:'flex',flexDirection:'row',marginTop:'3%'
}}>
  <div style={{width:'40%',borderRadius:'15px',margin:'1.2%',backgroundImage:`url(${women_collection})`,backgroundPosition:'center', backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top center'}}>
  <p style={{backgroundColor:'#2626264D',width:'100%',marginTop:'100%',padding:'1.2em 0 1.2em 0',textAlign:'center',color:'white'}}>Women Collection</p>
  </div>
  <div style={{width:'40%',borderRadius:'15px',margin:'1.2%',backgroundImage:`url(${men_collection})`,backgroundPosition:'center', backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top center'}}>
  <p style={{backgroundColor:'#2626264D',width:'100%',marginTop:'100%',padding:'1.2em 0 1.2em 0',textAlign:'center',color:'white'}}>men Collection</p>
  </div>
</div>
      </div>
      </main>
    
  );
}
}
const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
  }


export default connect(mapStateToProps)(Main)
