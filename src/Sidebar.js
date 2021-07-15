import { Button } from '@material-ui/core'
import React from 'react'
import './Sidebar.css'
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import InboxIcon from '@material-ui/icons/Inbox';
import SidebarOption from './SidebarOption'
import StarIcon from '@material-ui/icons/Star';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DraftsIcon from '@material-ui/icons/Drafts';
import NearMeIcon from '@material-ui/icons/NearMe';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIcon from '@material-ui/icons/Phone';
import {useDispatch} from 'react-redux'
import { openSendMessage } from './features/mailSlice';

const Sidebar = () => {

    const dispatch = useDispatch();

    return (
        <div className = "sidebar">
            <Button onClick = {() => dispatch(openSendMessage())}
                startIcon = {<AddIcon font-size = "large" />}
                className = "sidebar__compose"
            >
                Compose
            </Button>

            <SidebarOption selected = {true} Icon = {InboxIcon} title= "Inbox" number = "200" />
            <SidebarOption Icon = {StarIcon} title= "Starred" number = "200" />

            <SidebarOption Icon = {AccessTimeIcon} title= "Snoozed" number = "200" />

            <SidebarOption Icon = {LabelImportantIcon} title= "Important" number = "200" /><SidebarOption Icon = {StarIcon} title= "Starred" number = "200" />

            <SidebarOption Icon = {NearMeIcon} title= "Sent" number = "200" />
            <SidebarOption Icon = {DraftsIcon} title= "Drafts" number = "200" />
            <SidebarOption Icon = {ExpandMoreIcon} title= "More" number = "200" />
      
            <div className="sidebar__footer">

                <div className="sidebar__footerIcon">

                    <IconButton>
                        <PersonIcon />
                    </IconButton>

                    <IconButton>
                        <DuoIcon />
                    </IconButton>

                    <IconButton >
                        <PhoneIcon />
                    </IconButton>
                </div>
            </div>

        </div>
    )
}

export default Sidebar
