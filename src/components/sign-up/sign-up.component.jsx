import React, {useState} from 'react';
import './sign-up.styles.scss';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {userSignUpStart} from "../../redux/user/user.action";
import {connect} from "react-redux";

const SingUp = ({userSignUp}) => {

    const [userInfo, setUserInfo] = useState({displayName: '', email: '', password: '', confirmPassword: ''})
    const {displayName, email, password, confirmPassword} = userInfo;

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (password !== confirmPassword) {
            alert('Passwords don\'t match!')
            return;
        }

        userSignUp({email, password, displayName})
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setUserInfo({...userInfo, [name]: value})
    }

    return (
        <div className='sign-up'>
            <h2 className='title'>I do not have an account</h2>
            <span className='subtitle'>Login with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                    label='Full Name'
                    type='text'
                    value={displayName}
                    onChange={handleChange}
                    required
                    name='displayName'
                />
                <FormInput
                    label='Email'
                    type='email'
                    value={email}
                    onChange={handleChange}
                    required
                    name='email'
                />
                <FormInput
                    label='Password'
                    type='password'
                    value={password}
                    onChange={handleChange}
                    required
                    name='password'
                />
                <FormInput
                    label='Confirm Password'
                    type='password'
                    value={confirmPassword}
                    onChange={handleChange}
                    required
                    name='confirmPassword'
                />
                <CustomButton type='submit'>Sign Up</CustomButton>
            </form>
        </div>
    )

}

const mapDispatchToProps = (dispatch) => ({
    userSignUp: (credential) => dispatch(userSignUpStart(credential))
})

export default connect(null, mapDispatchToProps)(SingUp);