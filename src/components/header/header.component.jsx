import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/4.4 crown.svg'
import {auth} from '../../firebase/firebase.utils';
import {connect } from 'react-redux';
import './header.styles.scss';
import CartDropdown from '../card-dropdown/card-dropdown.component';
import CartIcon from '../cart-icon/cart-icon.component';
import {createStructuredSelector} from 'reselect';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user-reducer/user.selector';
import {OptionLink,HeaderContainer,LogoContainer,OptionContainer} from './header.styles';
const Header = ({currentUser,hidden}) =>
(

<HeaderContainer>
<LogoContainer to='/'>
<Logo className='logo'/> 

</LogoContainer>
<OptionContainer>

<OptionLink to ='/shop'>SHOP</OptionLink>
<OptionLink to ='/contact'>CONTACT</OptionLink>
{
  console.log("current user is ", currentUser)
}
{
    currentUser ?
    <OptionLink as='div' onClick={()=> auth.signOut()}>SIGN OUT</OptionLink>
    :
    <OptionLink to="/signin">SIGN IN</OptionLink>
}

<CartIcon/>

</OptionContainer>

{
  hidden?null :(<CartDropdown/>)
}
</HeaderContainer>

) 
const mapStateToProps = createStructuredSelector(
{
  currentUser: selectCurrentUser,
  hidden:selectCartHidden
}
);
export default connect(mapStateToProps)(Header);