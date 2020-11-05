import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import { IconButton } from '@material-ui/core';
import ForumIcon from '@material-ui/icons/Forum';

function Header() {
    return (
        <div className='header'>
            <IconButton>
                <PersonIcon className="header__icon" fontSize="large" />
            </IconButton>

            <img className="header__logo" alt="" src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png" />

            <IconButton>
                <ForumIcon className="header__icon" fontSize="large" />
            </IconButton>
        </div>
    )
}

export default Header
