import { useState } from 'react'
import './login.css'
import SignUpScreen from './SignupScreen';

function Login() {
    const [signIn, setSignIn] = useState(false);
    return (
        <div className='login'>
            <div className='login__background'>
                <img src='./assets/login_logo.png' alt='background' className='login__logo' />
                <button className='login__button' onClick={() => setSignIn(true)}>Sign in</button>
                <div className='login__gradient'></div>
            </div>
            <div className='login__body'>
                {signIn ? (
                    <SignUpScreen />
                ) : (
                    <>
                        <h1>Unlimited films, TV programmes and more.</h1>
                        <h2>Watch anywhere. Cancel at any time.</h2>
                        <h3>Ready to watch? Enter your email to create or restart  your membership.</h3>
                        <div className='login__input'>
                            <form onSubmit={(e) => {
                                e.preventDefault()
                                setSignIn(true)
                            }}>
                                <input type='email' placeholder='Email Address' />
                                <button className='login__getStarted'>GET STARTED</button>
                            </form>
                        </div>
                    </ >
                )}
            </div>
        </div>
    )
}

export default Login