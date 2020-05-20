  
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem,addQuantity,subtractQuantity} from './actions/cartActions'
import Shop from './shop';
const delete_button = require('../images/delete_button.png');
class Cart extends Component{
state={
    checkedItems:[],
}
onButtonClick=(item)=>{
    const checkedItems = [...this.state.checkedItems];
    const index = checkedItems.indexOf(item.id);
    checkedItems.splice(index,1);
    this.setState({checkedItems});
}
    //to remove the item completely
    
    handleRemove = (id)=>{
        this.props.removeItem(id);
    }
    buyProducts=()=>{
        console.log(this.state.checkedItems);
        this.props.removeItem(this.state.checkedItems);
    }
    //to add the quantity
    handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id)=>{
        this.props.subtractQuantity(id);
    }
    render(){
              
        let addedItems = this.props.items.length ?
            (  
                this.props.items.map(item=>{
                    return(
                    <table>
                        <tr>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>
                            QTY
                        </th>
                        <th>Total</th>
                        </tr>
                        <tr>
                            <td>
                        {/* <li className="collection-item avatar" key={item.id}> */}
                    
                                    <div className="item-img"> 
                                    <input type="checkbox" name="checkbox" onClick={()=>this.onButtonClick(item)}/>
                                        <img src={item.img} alt={item.img} className=""/>
                                    </div>
                           
                                    {/* <div className="item-desc"> */}
                                        <span className="title">{item.title}</span>
                                        <p>{item.desc}</p>
                                        {/* </div> */}
                                        </td>
                                
                                            <td>
                                        <p><b>$ {item.price}$</b></p> 
                                        </td>
                                        <td><p>
                                            <b> {item.quantity}</b> 
                                        </p></td>
                                        <td>
                                            ${item.price * item.quantity}
                                        </td>
                                        <td> <div className="add-remove">
                                            {/* <Link to="/cart"><img src={add_button} onClick={()=>{this.handleAddQuantity(item.id)}}/></Link> */}
                                            <Link to="/cart"><img src={delete_button} onClick={()=>{this.handleSubtractQuantity(item.id)}}/></Link>
                                        </div>
                                       </td></tr>
                                        {/* <button className="waves-effect waves-light btn pink remove" onClick={()=>{this.handleRemove(item.id)}}>Remove</button> */}
                                    {/* </div> */}
                                    
                                {/* </li> */}
                        </table>
                    )
                })
            ):

             (
                <p>Nothing.</p>
             )
       return(
           <div>
            <div >
            <nav className="navbar-cart">   
                    <p style={{ fontFamily: 'Montserrat Alternates',fontSize:'1.4em' }}>Fortune</p>
                    <ul className="cart-wrapper">
                    {/* <Link to="/">Shopping</Link> */}
    
        <li style={{display:'inline',marginRight:'1.2em'}}><Link to="/" style={{color:'white'}}>Home</Link></li>
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
            </div>
            <div className="container">
                <div className="cart">
                    <h5>You have ordered:</h5>
                    <ul className="collection">
                        {addedItems}
                    </ul>
                </div> 
               {this.props.items.length>0? <Shop onClick={()=>this.buyProducts()} />:null}          
            </div>
            </div>
       )
    }
}


const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
        //addedItems: state.addedItems
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)
