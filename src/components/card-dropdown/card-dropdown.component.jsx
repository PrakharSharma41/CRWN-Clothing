import React from 'react';
import {connect} from 'react-redux';
import {selectCartItem} from '../../redux/cart/cart.selectors';
import CustomButton from '../custom-button/custom-button.component';
import {withRouter} from 'react-router-dom';
import  './card-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
const CartDropdown = ({cartItems,history,dispatch})=>{

    
    return(
    <div className="cart-dropdown">
    <div className="cart-items">
    {
        cartItems.length ?(
        cartItems.map(item=>(
            <CartItem key={item.id} item={item}/>)
        ))
        : (<span className="empty-message">Your car is empty</span>)
    }
    </div>
    <CustomButton onClick={()=>{
        history.push('/checkout');
        dispatch(toggleCartHidden())
    }}>GO TO CHECKOUT</CustomButton>    
    </div>
    )
}
const mapStateToProps = state =>
({
 cartItems: selectCartItem(state)
});

export default withRouter(connect(mapStateToProps)(CartDropdown));