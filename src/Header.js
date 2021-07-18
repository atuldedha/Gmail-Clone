import React from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';

const Header = () => {

    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const signOut =() => {

        auth.signOut().then(()=>{
            dispatch(logout())
        })
    
    }

    return (
        <div className = "header">

            <div className="header__left">

                <IconButton>

                    <MenuIcon />

                </IconButton>
                
                <img 
                    src = "https://cdn.vox-cdn.com/thumbor/9SvBnlIrQ82W2pbwmriNumdd0g4=/0x0:1320x880/1220x813/filters:focal(555x335:765x545):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/67587450/newgmaillogo.0.jpg"
                    alt = "" 
                />
            </div>

            <div className="header__center">

                <SearchIcon />
                <input type = "text" placeholder = "Search" />
                <ArrowDropDownIcon className = "header__inputCaret" />

            </div>

            <div className="header__right">

                <IconButton>

                    <AppsIcon />

                </IconButton>

                <IconButton>

                    <NotificationsIcon />

                </IconButton>

                <Avatar onClick = {signOut}
                    src= {user?.photoUrl}
                    alt = {user?.displayName}
                />

            </div>

        </div>
    )
}

export default Header
