import React, {useState} from 'react';
import Header from '../Header/index';
import './index.css';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import { getToken } from '../../store/action/loginAction'

const Login = (props) =>  {
    const state = useState('kim');
    const userValue = state[0];
    const setuser = state[1]
    const stateTwo = useState('lee')
    const passwordValue = stateTwo[0];
    const setpassword = stateTwo[1]

    const handleUsername = (event) => {
        setuser(event.currentTarget.value);
      };

    const handlePassword = (event) => {
        setpassword(event.currentTarget.value);
      };

      const submitHandler = (event) => {
          const value = {
              username: userValue,
              password: passwordValue
          }
          event.preventDefault()
          const action = getToken(value)
          props.dispatch(action).then(res => {
            if(res) {

                props.history.push('/')
            }
          })
      }



        return (
            <div>
                <Header/>
                <div className="LoginSection">
                    <p className="LoginText">LOGIN</p>
                    <input
                        value={userValue}
                        onChange={ handleUsername }
                        type="text"
                        className="LoginInput"
                        placeholder="Username"/>
                    <input
                        value={ passwordValue }
                        onChange={ handlePassword }
                        type="password"
                        className="LoginInput"
                        placeholder="Password"/>
                    <button
                        className="LoginButton"
                        onClick={submitHandler}
                    >Login</button>
                </div>
            </div>
        );
}


export default withRouter(connect()(Login));