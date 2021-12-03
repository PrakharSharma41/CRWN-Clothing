import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './user-reducer/user-reducer';
import cartReducer from './cart/cart.reducer';
import  directoryReducer from './directory/directory-reducer';
import ShopReducer from './shop/shop.reducer';
const persistConfig = {
    key:'root',
    storage,
    whitelist:['cart']
    
    }
const RootReducer = combineReducers({

    user:userReducer,
    cart:cartReducer,
    directory:directoryReducer,
    shop:ShopReducer
});  


export default persistReducer(persistConfig,RootReducer);