import {makeStyles} from '@material-ui/core';
import styled from 'styled-components';

export const useStyles = makeStyles( (theme) =>{
    return{
        textMessage:{
            textAlign:'center'
        },
        category:{
            fontSize: '42px',
            textTransform: 'capitalize',
            
        }
    }
}); 
export const SetFlex = styled.div`
    display: flex;
    flex-direction: row-reverse;
    @media (max-width: 576px) {
        flex-direction: row;
    }
`;
export const Select = styled.select`
    width: 20%;
    background: transparent;
    border: none;
    border: 1px solid #ccc;
    padding: 10px 0px;
    outline: none;
    @media (max-width: 576px) {
        width: 50%;
        margin: 20px 0px;
    }
`;
export const Hr = styled.hr`
    width: 40%;
    margin: 0px;
    margin-top: 10px;
    margin-bottom: 65px;
`;
