//material-ui
import {AppBar, Toolbar, Typography, IconButton, Badge} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
//components
import {useStyles} from './Styles';
//styles
import {Toolbar1, Right, NLink, NLink2} from './Styles';
//tools
import {connect} from 'react-redux';

const Navbar = (props) => {
  const classes = useStyles();
    return (
    <>
      <AppBar elevation={0}>
        <Toolbar1 >
            <div className='left'>
              <NLink to='/'>
                <Typography variant='h4' color='primary'>
                  <Typography variant='inherit'>E_Commerce</Typography><Typography variant='inherit' color='secondary' className={classes.brand}>App</Typography>
                </Typography>
              </NLink>
            </div>
            <Right>
              <Typography variant='h6'>
                  $ {props.getTotalPrice ? props.getTotalPrice.toFixed(2) : '0.00'}
              </Typography>
              <NLink to='/cart'>
                <IconButton aria-label="cart">
                  <Badge badgeContent={props.getTotalAmount} color="secondary">
                    <ShoppingCartIcon />
                  </Badge>
                </IconButton>
              </NLink>
            </Right>
        </Toolbar1>

        <Toolbar className={classes.toolbar2}>
          <NLink2 to='/'>
            <Typography variant='inherit'>
              home
            </Typography>
          </NLink2>
          <NLink2 to='/cart'>
            <Typography variant='inherit'>
              cart
            </Typography>
          </NLink2>
        </Toolbar>
    </AppBar>
    <div className={classes.page}></div>
    <div className={classes.page}></div>
    <div className={classes.page}></div>
    </>
    );
  }
const mapStateToProps = (state) => {
  return{
    getTotalAmount: state.cart.reduce((ack, data) => ack + data.amount, 0),
    getTotalPrice: state.cart.reduce((ack, data) => ack + data.total, 0),
  }
}
export default connect(mapStateToProps, null)(Navbar);
  