import React, {useState} from 'react';
import './sign-in.styles.scss';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {emailSignInStart, googleSignInStart} from "../../redux/user/user.action";
import {connect} from "react-redux";

const SignIn = ({emailSignInStart, googleSignInStart}) => {

    const [userCredentials, setUserCredentials] = useState({email: '', password: ''});

    const handleSubmit = async (event) => {
        event.preventDefault()

        const {email, password} = userCredentials;

        emailSignInStart(email, password)
    }

    const handleChange = (event) => {
        const {value, name} = event.target;
        setUserCredentials({...userCredentials, [name]: value})
    }

    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with you email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput name='email' type='email' value={userCredentials.email} required
                           handleChange={handleChange} label='Email'/>

                <FormInput name='password' type='password' value={userCredentials.password} required
                           handleChange={handleChange} label='Password'/>

                <div className='buttons'>
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton type={'button'} onClick={googleSignInStart} isGoogleSignIn>Sign In with
                        Google</CustomButton>
                </div>
            </form>
        </div>
    );

}

const mapDispatchToProps = (dispatch) => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn);