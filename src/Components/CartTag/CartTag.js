//material-ui
import {Grid, Button  } from "@material-ui/core";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
//styles
import {New, Img, Title, Price, SetFlex, ProductImage, ProductInfo, UserInteraction, Select} from './Style'
// tools
import {connect} from 'react-redux';
import {useState} from 'react';
//components
import {Update_product_fn, remove_Item_fn} from '../Redux/Action';
import { useStyles } from "./Style";


const CartTag = ({id, cart, amount, date, remove_Item_fn, Update_product_fn}) => {
  const classes = useStyles()
  const [currentAmount, setCurrentAmount] = useState(amount);
  
  //console.log('currentAmount: ',currentAmount);
      return (
        <Grid item xs={12} className={classes.setPosition}>
         <New>{(date)}</New>
          <SetFlex>
            <Grid container spacing={2}>
                
                <Grid item xs={12} sm={3} md={3}>
                  <ProductImage>
                    <Img src={cart.image} alt={cart.title} className='Img' />
                  </ProductImage>
                </Grid>

                <Grid item xs={12} sm={6} md={6}>
                  <ProductInfo>
                    <Title variant='h6'>
                      {cart.title}
                    </Title>
                    <Price variant='inherit'>
                      EGP {cart.price}
                    </Price>
                  </ProductInfo>
                </Grid>
                <Grid item xs={12} sm={3} md={3}>
                  <UserInteraction>
                  <Select
                   value={currentAmount}
                   onChange={(e) => {
                    remove_Item_fn(id)
                    Update_product_fn(cart, parseInt(e.target.value), e.target.value*cart.price)
                    setCurrentAmount(parseInt(e.target.value));
                    //console.log(parseInt(e.target.value)*cart.price)
                   }} >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                  </Select>
                  <Button color="secondary" onClick={() => remove_Item_fn(id)}>
                      <DeleteOutlineIcon />
                  </Button>
                  </UserInteraction>
                </Grid> 
            </Grid>

          </SetFlex>
        </Grid>
      );
    }
     
export default connect(null,{Update_product_fn, remove_Item_fn})(CartTag);
    