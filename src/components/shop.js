  
import React, { Component } from 'react'
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
//import { addShipping } from './actions/cartActions'
class Shop extends Component{
    render(){
  
        return(
            <div>
        
            <div className="container">
                    <div className="checkout">
                        <Link to="/success"><button className="shopButton">Buy Now</button></Link>
                    </div>
                 </div>
                 </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        addedItems: state.addedItems,
        total: state.total
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        addShipping: ()=>{dispatch({type: 'ADD_SHIPPING'})},
        substractShipping: ()=>{dispatch({type: 'SUB_SHIPPING'})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Shop)