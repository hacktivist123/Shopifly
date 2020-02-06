import React from 'react'
import './SignIn.scss'
import FormInput from '../FormInput/FormInput'
import CustomButton from '../CustomButton/CustomButton'
export default class SignIn extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        email: '',
        password: ''
    };
  }
  handleSubmit = e => {
    e.PreventDefault();
    this.setState({ email: '', password: '' })
  }
  handleChange = e => {
      const { name, value} = e.target;
      this.setState({ [name]: value })
  }
  render () {
    return (
        <div className='sign-in'>
          <h2>I already an account</h2>
          <span>Sign in with your email and password</span>
          <form onSubmit={this.handleSubmit}>
            <FormInput
                  name ='email'
                  type ='email'
                  value = {this.state.email}
                  required
                  handleChange = {this.handleChange}
                  label='Email'
            />
            <FormInput
                  name ='password'
                  type ='password'
                  value = {this.state.password}
                  required
                  handleChange = {this.handleChange}
                  label='Password'
            />
            <CustomButton
                    type ='submit'
            >
              SIGN IN
            </CustomButton>
          </form>
        </div>
    )
  }
}
