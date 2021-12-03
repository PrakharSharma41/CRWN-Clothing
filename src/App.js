import React from 'react';
import HomePage  from './pages/homepage/homepage.components'
import ShopPage from './pages/shop/shop.component';
import './App.css';
import {Route,Link,Redirect} from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import Header from './components/header/header.component';
import {connect } from 'react-redux';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth,createUserProfileDocument} from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user-reducer/user.action';
import {selectCurrentUser} from './redux/user-reducer/user.selector';
import {selectCollections} from './redux/shop/shop.selector';
import CheckoutPage from './pages/checkout/checkout.component';
import {addCollectionAndItems} from './firebase/firebase.utils';
class App extends React.Component {
  

  unsubscribeFromAuth = null;
  componentDidMount()
  {
    const {setCurrentUser,collectionsArray} = this.props;
   this.unsubscribeFromAuth=auth.onAuthStateChanged( async userAuth=>
    {
      
      if(userAuth)
      {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot=>
          {
                setCurrentUser({
                  
                    id:snapShot.id,
                    ...snapShot.data()
                  
                });
          });
       
      }
      else
      {
        setCurrentUser(userAuth);
      }
     addCollectionAndItems('collections',collectionsArray);
    }); 

  }
  componentWillUnmount()
  {
    this.unsubscribeFromAuth();
  }
  render()
  {
    return (
      <div>
      <Header/>
      <switch>
      
      <Route exact path='/' component={HomePage}/>
      <Route path='/shop' component = {ShopPage}/>
      <Route exact  path='/checkout' component={CheckoutPage}/>
     <Route exact path='/signin' render={()=> this.props.currentUser ? (<Redirect to="/"/>):(<SignInAndSignUpPage/>)}/>
      </switch>
    

      </div>
    );
  }

}
const mapStateToProps = createStructuredSelector({
  currentUser:selectCurrentUser,
  collectionsArray:selectCollections
})
const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
export default connect(mapStateToProps,mapDispatchToProps)(App);
