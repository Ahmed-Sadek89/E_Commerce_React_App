import {makeStyles, Typography} from '@material-ui/core';
import styled from 'styled-components';

export const useStyles = makeStyles( (theme) =>{
    return{
       

    }
}) ;


export const Overlay = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    height: 92%;
    text-align: center;
    overflow: hidden;
    cursor: pointer;
    line-height: 2;
    &:hover{
     Img{
        transform: scale(1.1);
      }
    } 
`;
export const Img = styled.img`
    height: 300px;
    width:100%;
    transition: all 1s ease;
    margin-bottom: 40px;
`;
export const Title = styled(Typography)`
    color:#333;
    font-size: 13px;
    font-weight: bolder;
    font-style: italic;
    line-height: 1.3;
`;
export const Price = styled(Typography)`
    color:#333;
    font-size: 13px;
    font-weight: bolder;
    font-family: "Poppins",sans-serif;
    margin-top: 20px;
`