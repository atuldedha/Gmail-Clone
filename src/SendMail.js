import React from 'react'
import './SendMail.css'
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core'
import {useForm} from 'react-hook-form'
import {useDispatch} from 'react-redux'
import { closeSendMessage } from './features/mailSlice';
import firebase from 'firebase'
import db from './firebase'
 
const SendMail = () => {

    const dispatch = useDispatch();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (formData) => {

        console.log(formData);

        db.collection("emails").add({
            to: formData.to,
            subject: formData.subject,
            message: formData.message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })

        dispatch(closeSendMessage())
        
    }

    return (

        <div className = "sendMail">
            <div className="sendMail__header">

                <h3>New Message</h3>
                <CloseIcon
                    onClick = {() => dispatch(closeSendMessage())} 
                    className = "sendMail__close"
                />
            </div>

            <form onSubmit = {handleSubmit(onSubmit)} >

                <input 
                    type = "email" 
                    placeholder = "To" 
                    {...register("to", {required:true})}
                />
                {errors.to && <p className = "sendMail__error">To is Required</p>}

                <input 
                    type = "text" 
                    placeholder = "subject" 
                    {...register("subject", {required:true})}
                 />

                {errors.subject && <p className = "sendMail__error">To is Required</p>}

                <input 
                    className = "sendMail__message" 
                    type = "text" placeholder = "Message" 
                    {...register("message", {required:true})} 
                 />

                {errors.message && <p className = "sendMail__error">To is Required</p>}
                
                <div className="sendMail__options">

                    <Button className = "sendMail__send"
                        type = "submit"
                        variant = "contained"
                        color = "primary"
                    >
                        Send

                    </Button>
                </div>
            </form>
        </div>
    )
}

export default SendMail
