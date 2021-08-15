import {makeStyles} from '@material-ui/core';
import styled from 'styled-components';

export const useStyles = makeStyles( (theme) =>{
    return{
        CartAddress: {
            fontSize: '31px',
            padding: '20px 0px',
            fontWeight: 'bolder',
            color: '#333',
            textTransform:'capitalize'
        },
        checkout:{
            marginTop: '10px',
            padding:'10px 0px'
        }
    }
}) 


export const SetRecet = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #ccc;
    padding: 20px;
`;
export const Line = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 2px;
    text-transform: capitalize;
`;
export const Hr = styled.div`
    height: 1px;
    display: block;
    background: #ccc;
    margin: 10px;
`;



