import {makeStyles, Typography} from '@material-ui/core';
import styled from 'styled-components';

export const useStyles = makeStyles( (theme) =>{
    return{
        setPosition:{
            position: 'relative',
        }
    }
}) ;


export const SetFlex = styled.div`
    display:flex;
    border: 1px solid #ddd;
    padding: 20px;
`;
export const ProductImage = styled.div`
    
`;
export const Img = styled.img`
    height: 150px;
    width:100%;
`;
export const ProductInfo = styled.div`
    padding-top:20px;
    padding-left:20px;
    font-family: "Poppins",sans-serif;
`;
export const Title = styled(Typography)`
    color: #333;
    font-size: 25px;
    margin-bottom: 10px;
    line-height: 1;
`;
export const Price = styled(Typography)`
    color: #333;
    font-size: 13px;
`;
export const UserInteraction = styled.div`
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-end;
    justify-content: space-between;
    height: 100%;
`;
export const Select = styled.select`
  width: 50%;
  text-align: center;
  background: transparent;
  border: none;
  border: 1px solid #ddd;
  padding: 10px 0px;
  margin-right: 11px;
`;
export const New = styled.div`
    position: absolute;
    top: 0px;
    z-index: 10;
    background: #3f51b5;
    padding: 5px 15px;
    text-transform: capitalize;
    left: 0px;
    color: #fff;
    font-weight: bolder;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-size: 13px;
    letter-spacing: -1px;
`;