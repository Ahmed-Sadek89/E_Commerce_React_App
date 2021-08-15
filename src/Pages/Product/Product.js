//tools
import {useQuery} from 'react-query';
import {useStyles} from './Style';
import {connect} from 'react-redux';
import { useState } from 'react';
//material-ui
import {Container ,Typography, Grid, Button } from '@material-ui/core';
//components
import {fetchTheSelectedProduct} from '../../Components/Api/Api';
import {add_product_fn} from '../../Components/Redux/Action';
//styles
import {Img, Content, Select} from './Style';


const Product = (props) => {
  const id = parseInt(props.match.params.id) ? parseInt(props.match.params.id) : 1
  const {data, status } = useQuery('ProductPage', () =>fetchTheSelectedProduct(id));
  const classes = useStyles();

  console.log('ProductState: ', props.ProductState)
  //console.log('getTotalAmount: ', props.getTotalAmount)
  //console.log('getTotalPrice: ', props.getTotalPrice)
  
  const [product, setProduct]= useState({});
  const [amount, setAmount]= useState(1);
  const AddToCart = (e) =>{
    e.preventDefault();
    if(amount === null || amount === 0 || amount === 1){
      setAmount(1)
    }
    setProduct(data);
    props.add_product_fn(data, amount, amount * data.price);

  }
    return (
      
      <Container>
        <Container>
        {
          status ==='loading' &&
          <Typography variant='h1' color='primary' className={classes.textMessage}>
            L O o D I N G.......
          </Typography>
        }
        {
          status ==='error' &&
          <Typography variant='h2' color='secondary' className={classes.textMessage}>
            Something Went Error, Please Refresh The Page ...
          </Typography>
        }
        {
          status ==='success' &&
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
                <div>
                  <Img src={data.image} alt={data.title} />
                </div>
            </Grid>
            <Grid item xs={12} md={6} className={classes.setPosition}>
                <Content>
                  <Typography variant='h6' className={classes.makePosition}>
                    {data.category}
                  </Typography>
                  
                  <Typography variant='h2' className={classes.title}>
                    {data.title}
                  </Typography>
                  <Typography variant='h4' className={classes.price}>
                    EGP {data.price}
                  </Typography>
                  
                  <form onSubmit={AddToCart}>
                    <Select value={amount} onChange={(e) => setAmount(parseInt(e.target.value))}>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                    </Select>
                    <Button type='submit' color='primary' variant='contained'>
                      Add To Cart
                    </Button>
                  </form>
                  <Typography variant='h6' className={classes.description}>
                     {data.description}
                  </Typography>
                </Content>
            </Grid>
          </Grid>
        }      
        
        </Container>
      </Container>
      
    );
  }
const mapDispatchToProps = (state) =>{
  return {
    ProductState: state
  }
}
export default connect(mapDispatchToProps, {add_product_fn})(Product);
  