import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC9H7BhWCKtFBJnrp930ONpUh-h2b181YY",
    authDomain: "crwn-db-9e2a2.firebaseapp.com",
    databaseURL: "https://crwn-db-9e2a2.firebaseio.com",
    projectId: "crwn-db-9e2a2",
    storageBucket: "crwn-db-9e2a2.appspot.com",
    messagingSenderId: "379955170897",
    appId: "1:379955170897:web:cd91bd8b8f95f0b7d8f270",
    measurementId: "G-9YEFY8NWX7"
  };
  export const createUserProfileDocument = async (userAuth,additionalData)=>
  {
    if(!userAuth) return;
 
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();
    
    if(!snapShot.exists)
    {
      const {displayName,email} = userAuth;
      const createdAt = new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      }
      catch(error)
      {
       console.log(error);
      }
      
    }
    return userRef;
  }
  firebase.initializeApp(config);

  export const addCollectionAndItems = (collectionKey,obectsToAdd) =>
  {
    const collectionRef = firestore.collection(collectionKey);
    console.log(collectionRef);

  }
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;