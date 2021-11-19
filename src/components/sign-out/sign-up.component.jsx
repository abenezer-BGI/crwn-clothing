import React from 'react';
import './sign-up.styles.scss';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {auth, createUserProfileDocument} from "../../firebase/firebase.util";

class SingUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault()

        const {displayName, email, password, confirmPassword} = this.state;
        if (password !== confirmPassword) {
            alert('Passwords don\'t match!')
            return ;
        }

        try {
            const {user} = auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName})
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '',
            })
        } catch (e) {
            console.error(e)
        }
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value})
    }

    render() {
        const {displayName, email, password, confirmPassword} = this.state;
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span className='subtitle'>Login with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        label='Full Name'
                        type='text'
                        value={displayName}
                        onChange={this.handleChange}
                        required
                        name='displayName'
                    />
                    <FormInput
                        label='Email'
                        type='email'
                        value={email}
                        onChange={this.handleChange}
                        required
                        name='email'
                    />
                    <FormInput
                        label='Password'
                        type='password'
                        value={password}
                        onChange={this.handleChange}
                        required
                        name='password'
                    />
                    <FormInput
                        label='Confirm Password'
                        type='password'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        required
                        name='confirmPassword'
                    />
                    <CustomButton type='submit'>Sign Up</CustomButton>
                </form>
            </div>
        )
    }
}

export default SingUp;