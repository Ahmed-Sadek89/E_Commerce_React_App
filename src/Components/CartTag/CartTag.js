//material-ui
import {Grid, Button  } from "@material-ui/core";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
//styles
import {New, Img, Title, Price, SetFlex, ProductImage, ProductInfo, UserInteraction, Select} from './Style'
// tools
import {connect} from 'react-redux';
import {useState} from 'react';
//components
import {Update_product_fn, remove_Item_fn} from '../Redux/Cart/Action';
import { useStyles } from "./Style";


const CartTag = ({id, cart, amount, date, RemoveItem, UpdateItem}) => {
  const classes = useStyles()
  const [currentAmount, setCurrentAmount] = useState(amount);
  const handleChangeAmount = (e) => {
    setCurrentAmount(parseInt(e.target.value))
    UpdateItem(id, parseInt(e.target.value))
  } 
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
                      $ {cart.price}
                    </Price>
                  </ProductInfo>
                </Grid>
                <Grid item xs={12} sm={3} md={3}>
                  <UserInteraction>
                  
                   <Select
                   value={currentAmount ? currentAmount : 1}
                   onChange={(e) => handleChangeAmount(e)}
                    >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>
                    <option value={11}>11</option>
                    <option value={12}>12</option>
                  </Select>
                  <Button color="secondary" onClick={() => RemoveItem(id)}>
                      <DeleteOutlineIcon />
                  </Button>
                  </UserInteraction>
                </Grid> 
            </Grid>

          </SetFlex>
        </Grid>
      );
    }
const mapDispatchToProps = (dispatch) => {
  return{
    RemoveItem: (id) => dispatch(remove_Item_fn(id)),
    UpdateItem: (id, newAmount) => dispatch(Update_product_fn(id, newAmount))
  }
}
export default connect(null,mapDispatchToProps)(CartTag);
    