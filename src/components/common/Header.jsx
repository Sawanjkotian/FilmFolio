
import { AppBar, Toolbar, styled, Typography, Box, InputBase } from '@mui/material';

import { useState } from 'react';

import { logoUrl } from '../../constants/constant';

import {Menu, BookmarkAdd, ArrowDropDown} from '@mui/icons-material';

import { Navigate, useNavigate } from 'react-router-dom';

import { routPath } from '../../constants/route';

//HeaderMenu
import HeaderMenu from './HeaderMenu';


const StyledToolBar = styled(Toolbar)`
    background: #121212;
    min-height: 56px !important;
    padding: 0 115px !important;
    justify-content: space-between;
    & > *{
        padding: 0 16px;
    }
    & > div {
        display:flex;
        align-item:center;
        cursor:pointer;
        & > p{
            font-size: 14px;
            font-weight: 600
        }
    }
    & > p{
        font-size: 14px;
        font-weight: 600
    }
`;

const InputSearchField = styled(InputBase)`
    background: #FFFFFF;
    height: 30px;
    width: 55%;
    border-radius: 5px;
`


const Logo = styled('img')({
    width:64
})



const Header = () =>{

    const[open, setOpen] = useState(null)

    const HandleClick = (e) =>{
        setOpen(e.currentTarget);
    } 

    const handleClose = () =>{
        setOpen(null)
    }
    const navigate = useNavigate();

    return (
        <AppBar position='static'>
            <StyledToolBar>
                <Logo src={logoUrl} alt="logo" onClick={() => navigate(routPath.home)}/>
                <Box onClick = {HandleClick}>
                    <Menu />
                    <Typography component="span">Menu</Typography>
                </Box>
                <HeaderMenu open = {open} handleClose={handleClose}/>
                <InputSearchField />
                <Typography>IMDb<Box component="span">Pro</Box></Typography>
                <Box>
                    <BookmarkAdd />
                    <Typography component="span">Watchlist</Typography>
                </Box>
                <Typography>Sign In</Typography>
                <Box>
                    <Typography component="span">EN</Typography>
                    <ArrowDropDown />
                </Box>
            </StyledToolBar>
        </AppBar>
    )
}

export default Header; 