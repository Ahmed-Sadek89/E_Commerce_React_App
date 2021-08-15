import {makeStyles} from '@material-ui/core';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import {Toolbar} from '@material-ui/core';

export const useStyles = makeStyles( (theme) =>{
    return{
        toolbar1:{
            display: 'flex',
            justifyContent: 'space-between',
            backgroundColor: '#eaeaff',
            color: '#000'
        },
        toolbar2:{
            backgroundColor:'#262626',
            minHeight: '47px'
        },
        page:theme.mixins.toolbar
    }
});
export const Toolbar1 = styled(Toolbar)`
    display: flex;
    justify-content: space-between;
    background-color: #eaeaff;
    color: #000;
    @media (max-width: 576px) {
        flex-direction: column;
        align-items: baseline;
        padding: 10px 3px;
    };
`; 

export const Right = styled.div`
    display: flex;
    align-items: center;
    @media (max-width: 576px) {
        padding-left: 20px;
    };
`;
export const NLink = styled(NavLink)`
    text-decoration:none;
`;
export const NLink2 = styled(NavLink)`
    text-decoration: none;
    font-size: 20px;
    margin-right: 10px;
    color: #fff;
    text-transform: capitalize;
    transition: all 0.5s ease;
    line-height: 3;
    padding: 0px 4px;
    &:hover{
        background-color: #3f51b5;
    }
`;