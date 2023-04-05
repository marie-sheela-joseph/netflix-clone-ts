import React, { useState } from 'react'
import './signupScreen.css'
import { auth } from '../firebase'

function SignupScreen() {
    const [state, setState] = useState({ email: '', password: '' })
    function register(e:React.MouseEvent<HTMLSpanElement, MouseEvent>) {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(state.email, state.password)
            .then((authUser) => { console.log(authUser) })
            .catch((err) => alert(err))
    }
    function signIn(e:React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        auth.signInWithEmailAndPassword(state.email, state.password)
            .then((authUser) => {
                console.log(authUser)
            })
            .catch((err) => {
                alert(err)
            })
    }
    function handleInputChange(e:React.ChangeEvent<HTMLInputElement>) {
        setState((prevState) => { return { ...prevState, [e.target.name]: e.target.value } });
    }
    return (
        <div className='signupScreen'>
            <form onSubmit={(e) => signIn(e)}>
                <h1>Sign Up</h1>
                <input placeholder='Email' type='email' name='email' onChange={(e) => handleInputChange(e)} />
                <input placeholder='Password' type='password' name='password' onChange={(e) => handleInputChange(e)} />
                <button type='submit'>Sign In</button>
                <h4><span className='signupScreen___gray'>New to Netflix?</span> <span className='signupScreen__link' onClick={(e) => register(e)}>Sign Up now.</span></h4>
            </form>
        </div>
    )
}

export default SignupScreen