
import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component'
import './sign-in.styles.scss';
import {signInWithGoogle,auth} from '../../firebase/firebase.utils';
class SignIn extends React.Component
{
constructor(props)
{
super(props);

    this.state = 
{
 email:'',
 password:''
}


}
handleSubmit = async event =>
{
    event.preventDefault();
    const {email,password} = this.state;

    try{
        await auth.signInWithEmailAndPassword(email,password);

      
    this.setState({email:'',password:''})
    }catch(error)
    {
        if(error.message==="The password is invalid or the user does not have a password.")
        {
            alert('Oops!! Password does not match. Please try again.');
        }
        
        console.log(error);
    }

}
handleChange = event =>
{
    const {name,value} = event.target;
   
    this.setState({[name]:value});
   
}
render()
{
 return(
  <div className="sign-in">
  <h2>I already have an account</h2>
  <span>Sign in with your email and password</span>

  <form onSubmit={this.handleSubmit}>
  <FormInput 
  name="email" label="Email" type="email" value={this.state.email}  handleChange={this.handleChange} required/>
  

  <FormInput
  name = "password" 
  type="password" 
  value={this.state.password}
  handleChange={this.handleChange}
  label = "Password"
  required
  />
 

<div className="buttons">
<CustomButton type="submit" value="Submit Value">SIGN IN</CustomButton>
<CustomButton isGoogleSignIn  onClick={signInWithGoogle} >
{' '}
SIGN IN with Google{''}
</CustomButton>

</div>

  </form>
  
  </div>

 )

}

}
export default SignIn; 