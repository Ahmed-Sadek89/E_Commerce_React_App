//material-ui
import {Typography, Container, Grid, Button} from '@material-ui/core';
//components
import CartTag from '../../Components/CartTag/CartTag';
import { useStyles } from './Style';
import {clear_All_products_fn} from '../../Components/Redux/Cart/Action'
//styles
import {SetRecet, Line, Hr } from './Style';
//tools
import {connect} from 'react-redux';

const Cart = (props) => {
  const classes = useStyles();
  const CheckOut = () =>{
    props.clear_All_products_fn();
    window.confirm('Purchased Successfully...')
  }
    return (
      <Container>
        <Container>
          <Typography variant='h2' className={classes.CartAddress}>
            my shopping bag ( {props.getTotalAmount} item )
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              {/* here mapping to the products */}
              <Grid container spacing={3}>
                {
                  props.ProductState.map((item) => {
                    //console.log(item)
                    return(
                      <CartTag
                       key={item.id}
                       item={item}
                       id={item.id} 
                       cart={item.product} 
                       amount={item.amount} 
                       total={item.total} 
                       date={item.date}
                      />
                    )
                  })
                }
              </Grid>
            </Grid>
            {/* here get the recet */}
            <Grid item xs={12} md={4}>
                { props.getTotalAmount !== 0 &&
                  <>
                      
                    <Typography variant='h2' className={classes.CartAddress}>
                      Order summary
                    </Typography>

                    <SetRecet>

                      <div className='info'>

                        <Line>
                          <Typography className='inherit'>
                            SubTotal
                          </Typography>
                          <Typography className='inherit'>
                            $ {props.getTotalPrice.toFixed(2)}
                          </Typography>
                        </Line>
                        <Line>
                          <Typography className='inherit'>
                            Delivery
                          </Typography>
                          <Typography className='inherit'>
                            $ 50.00
                          </Typography>
                        </Line>

                      </div>

                      <Hr></Hr>

                      <div>

                        <Line>
                          <Typography className='inherit'>
                            order total
                          </Typography>
                          <Typography className='inherit'>
                            $ {(props.getTotalPrice + 50).toFixed(2)}
                          </Typography>
                        </Line>
                        <Button color='primary' variant='contained' className={classes.checkout} fullWidth
                         onClick={CheckOut}
                         >
                          CheckOut
                        </Button>
                      </div>
                    </SetRecet>
                  </>
                }
            </Grid>
          </Grid>
        </Container>
      </Container>
    );
  }
const mapStateToProps = (state) =>{
  return{
    ProductState: state.cart,
    getTotalAmount: state.cart.length,
    getTotalPrice: state.cart.reduce((ack, data) => ack + data.total, 0)
  }
}  
export default connect(mapStateToProps,{clear_All_products_fn})(Cart);
  