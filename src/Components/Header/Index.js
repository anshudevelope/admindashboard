import React from "react";
import { Link } from "react-router-dom";
import logo from '../../Asset/Images/Shriprasadam Logo 2.png';
import Button from '@mui/material/Button';
import { MdMenuOpen } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import Searchbox from "../Search";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { IoCartSharp } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiBellOn } from "react-icons/ci";

import { MdOutlineSecurity } from "react-icons/md";
import { MdOutlineAccountCircle } from "react-icons/md";


import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { useState } from "react";


const Header = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseMyAccDrop = () => {
        setAnchorEl(null);
    };


    return (
        <>
            <header className="d-flex align-items-center">
                <div className="container-fluid w-100">
                    <div className="row d-flex align-items-center w-100">
                        {/* Logo Wrapper*/}
                        <div className="col-sm-2 part1">
                            <Link to={'/'} className="d-flex align-items-center logo">
                                <img src={logo}></img>
                                <span className="ml-2">SRM</span>
                            </Link>
                        </div>

                        <div className="col-sm-3 d-flex align-items-center part2">
                            <Button className="rounded-circle mr-3 "><MdMenuOpen /></Button>
                            <Searchbox />
                        </div>

                        <div className="col-sm-7 d-flex align-items-center justify-content-end part2">
                            <Button className="rounded-circle mr-3 "><MdOutlineLightMode /></Button>
                            {/* <Button className="rounded-circle mr-3 "><MdDarkMode /></Button> */}
                            <Button className="rounded-circle mr-3 "><IoCartSharp /></Button>
                            <Button className="rounded-circle mr-3 "><MdOutlineMailOutline /></Button>
                            <Button className="rounded-circle mr-3 "><CiBellOn /></Button>

                            <div className="myAccountwrapper">
                                <Button className="myaccount d-flex align-items-center" onClick={handleClick}>
                                    <div className="userImg">
                                        <span className="rounded-circle">
                                            <img src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg"></img>
                                        </span>
                                    </div>

                                    <div className="userInfo">
                                        <h5>Steve Martin</h5>
                                        <p className="mb-0">@steve_martin</p>
                                    </div>

                                </Button>

                                <Menu
                                    anchorEl={anchorEl}
                                    id="account-menu"
                                    open={open}
                                    onClose={handleCloseMyAccDrop}
                                    onClick={handleCloseMyAccDrop}
                                    slotProps={{
                                        paper: {
                                            elevation: 0,
                                            sx: {
                                                overflow: 'visible',
                                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                                mt: 1.5,
                                                '& .MuiAvatar-root': {
                                                    width: 32,
                                                    height: 32,
                                                    ml: -0.5,
                                                    mr: 1,
                                                },
                                                '&::before': {
                                                    content: '""',
                                                    display: 'block',
                                                    position: 'absolute',
                                                    top: 0,
                                                    right: 14,
                                                    width: 10,
                                                    height: 10,
                                                    bgcolor: 'background.paper',
                                                    transform: 'translateY(-50%) rotate(45deg)',
                                                    zIndex: 0,
                                                },
                                            },
                                        },
                                    }}
                                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                >

                                    <MenuItem onClick={handleCloseMyAccDrop}>
                                        <ListItemIcon>
                                            <MdOutlineAccountCircle/>
                                        </ListItemIcon>
                                        My Account
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseMyAccDrop}>
                                        <ListItemIcon>
                                            <MdOutlineSecurity/>
                                        </ListItemIcon>
                                        Reset Password
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseMyAccDrop}>
                                        <ListItemIcon>
                                            <Logout/>
                                        </ListItemIcon>
                                        Logout
                                    </MenuItem>
                                </Menu>



                            </div>



                        </div>

                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;