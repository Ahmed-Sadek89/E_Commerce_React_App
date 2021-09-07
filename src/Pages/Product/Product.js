//tools
import {useQuery} from 'react-query';
import { connect } from 'react-redux';
import {useHistory} from 'react-router-dom'
//material-ui
import {Container ,Typography, Grid, Button } from '@material-ui/core';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
//components
import {fetchTheSelectedProduct} from '../../Components/Api/Api';
import {add_product_fn} from '../../Components/Redux/Cart/Action'
//styles
import {Img, Content} from './Style';
import {useStyles} from './Style';


const Product = (props) => {
  const id = parseInt(props.match.params.id) ? parseInt(props.match.params.id) : 1
  const {data, status } = useQuery('ProductPage', () =>fetchTheSelectedProduct(id));
  const classes = useStyles();
  // check if product is added or not
  const isAddedToCart = props.state.find(item => item.id === id)
  const disabled = isAddedToCart ? true : false
  const btnText = disabled ? 'In Cart': 'Add To Cart';
  //
  const history = useHistory()
  const AddToCartHandler = () =>{
    props.AddToCart(data.id, data, data.price)
  }
    return (
      
      <Container>
        <Container>
        {
          status ==='loading' &&
          <Typography variant='h1' color='primary' className={classes.textMessage}>
            Loading.......
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
          data ?
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
                    $ {data.price}
                  </Typography>
                  {
                    disabled === false &&
                    <Button color='primary' startIcon={<AddShoppingCartOutlinedIcon />} variant='contained' onClick={ AddToCartHandler }>
                      {btnText}
                    </Button>
                  }
                  {
                    disabled === true &&
                    <Button color='inherit' endIcon={<ShoppingCartOutlinedIcon />} variant='contained' onClick={() => history.push('/cart')}>
                      {btnText}
                    </Button>
                  } 
                  <Typography variant='h6' className={classes.description}>
                     {data.description}
                  </Typography>
                </Content>
            </Grid>
          </Grid>
          :
          <Typography variant='h1' color='primary' className={classes.textMessage}>
            Reload the page if it nessesary.......
          </Typography>
        }      
        
        </Container>
      </Container>
      
    );
  }
const mapStateToProps = (state) => {
  return{
    state: state.cart
  }
}
const mapDispatchToProps = (dispatch) =>{
  return{
    AddToCart: (product, amount, total) => dispatch(add_product_fn(product, amount, total))
    
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Product);
  