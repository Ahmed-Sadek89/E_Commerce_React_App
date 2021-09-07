//material-ui
import {Grid } from "@material-ui/core";
//styles
import {Img, Overlay, Title, Price} from './Style'
// tools
import {useHistory } from 'react-router-dom';

const ProductTag = ({product}) => {
  const history = useHistory();
      return (
        <Grid item xs={12} sm={6} md={4} onClick={() => history.push(`/product/${product.id}`) } >
          <Overlay>
            <Img src={product.image} alt={product.title} className='Img' />
            <Title variant='h6'>
              {product.title}
            </Title>
            <Price variant='inherit'>
              $ {product.price}
            </Price>
          </Overlay>
        </Grid>
      );
    }
    
    export default ProductTag;
    