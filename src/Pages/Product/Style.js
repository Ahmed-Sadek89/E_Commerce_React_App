import {makeStyles} from '@material-ui/core';
import styled from 'styled-components';

export const useStyles = makeStyles( (theme) =>{
    return{
        textMessage:{
            textAlign:'center'
        },
        setPosition:{
          position: 'relative',
        },
        makePosition:{
          position: 'absolute',
          left: '0px',
          top: '0px',
          padding: '5px 15px',
          background: '#f50057',
          color: '#fff',
        },
        title:{
          color: '#3f51b5',
          padding: '21px 0px',
          fontSize: '34px',
          fontWeight: 'bolder'
        },
        price:{
          color: '#f50057',
          padding: '9px 0px',
          fontWeight: 'bolder'
        },
        description:{
          padding: '10px 0px',
          color:'#333'
        }
    }
}) 



export const Img = styled.img`
    height: 390px;
    width:100%;
    transition: all 1s ease;
`;
export const Content = styled.div`
  padding: 20px;
  background-color:#eaeaff;
`;
export const Select = styled.select`
  width: 20%;
  text-align: center;
  background: transparent;
  border: none;
  border: 1px solid #ccc;
  padding: 10px 0px;
  margin-right: 11px;
`;
