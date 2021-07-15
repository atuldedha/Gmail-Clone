import React from 'react'
import './Login.css'

import {Button} from '@material-ui/core'
import {auth, provider} from './firebase'
import { login } from './features/userSlice'
import {useDispatch} from 'react-redux'

const Login = () => {

    const dispatch  = useDispatch();

    const signIn = () => {

        auth.signInWithPopup(provider).then(({user}) => {
            dispatch(login({
                displayName: user.displayName,
                email: user.email,
                photoUrl: user.photoURL
            }))
        })

        .catch(error => alert(error.message))

    }

    return (
        <div className = "login">
            <div className="login__container">
                <img 
                    src = "https://cdn.vox-cdn.com/thumbor/9SvBnlIrQ82W2pbwmriNumdd0g4=/0x0:1320x880/1220x813/filters:focal(555x335:765x545):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/67587450/newgmaillogo.0.jpg" 
                    alt = "" 
                />

                <Button variant = "contained" color = "primary" onClick = {signIn}>Login</Button>
            </div>
        </div>
    )
}

export default Login
