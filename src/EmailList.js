import React, {useState, useEffect} from 'react'
import './EmailList.css'

import {Checkbox, IconButton} from '@material-ui/core'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import RedoIcon from '@material-ui/icons/Redo';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import SettingsIcon from '@material-ui/icons/Settings';
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import Section from './Section'
import EmailRow from './EmailRow'

import db from './firebase'
import { selectMail } from './features/mailSlice';

const EmailList = () => {

    const [emails, setEmails] = useState([])

    

    useEffect (() => {
        db.collection("emails").orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => 
        setEmails(snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
        }))))
    }, [])

    return (
        <div className = "emailList">
            <div className="emailList__settings">

                <div className="emailList__settingsLeft">

                    <Checkbox />
                    <IconButton>
                        <ArrowDropDownIcon />
                    </IconButton>

                    <IconButton>
                        <RedoIcon />
                    </IconButton>

                    <IconButton >
                        <MoreVertIcon />
                    </IconButton>

                </div>

                <div className="emailList__settingsRight">

                    <IconButton>
                        <ArrowLeftIcon />
                    </IconButton>

                    <IconButton>
                        <ArrowRightIcon />
                    </IconButton>

                    <IconButton>
                        <KeyboardIcon />
                    </IconButton>

                    <IconButton>
                        <SettingsIcon />
                    </IconButton>
                </div>
            </div>

            <div className="emailList__sections">

                <Section Icon = {InboxIcon} title = "primary" color = "red" selected />
                <Section Icon = {PeopleIcon } title = "Social" color = "#1a73EB" />
                <Section Icon = {LocalOfferIcon } title = "Promotions" color = "green" />
          
            </div>

            <div className="emailList__list">

                {emails.map(({id,data : {to,subject, message, timestamp}}) => (
                    <EmailRow key = {id} id = {id} title = {to} subject = {subject} description = {message} time = {new Date(timestamp?.seconds * 1000).toUTCString()} />
                ))}

            </div> 
        </div>
    )
}

export default EmailList
