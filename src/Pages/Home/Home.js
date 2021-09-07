// material-ui
import { Typography, Container, Grid } from "@material-ui/core";
//tools
import { useQuery } from "react-query";
import {useState} from 'react';
//components
import {fetchAllProducts} from '../../Components/Api/Api';
import { useStyles } from "./Style";
import ProductTag from "../../Components/ProductTag/ProductTag";
//styles
import {Select, SetFlex, Hr } from './Style';


const Home = () => {
  const [category, setCategory] =useState('All Products');
  const {data, status} = useQuery('fetch',fetchAllProducts)
  const classes = useStyles();
  return (
    
    <Container>
      <SetFlex>
        <Select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value='All Products'>All Products</option>
          <option value='electronics'>electronics</option>
          <option value='jewelery'>jewelery</option>
          <option value="men's clothing">men's clothing</option>
          <option value="women's clothing">women's clothing</option>
        </Select>  
      </SetFlex> 
      <Typography variant='h1' className={classes.category}>
            {category}
            
      </Typography>
      <Hr/>
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
          <>
          
          <Grid container spacing={2}>
          
            {
               data.map( (product) =>{
                 if(category === product.category){
                 return(
                     <ProductTag key={product.id} product={product}/>
                 )
               }else{console.log('now fetch all data')}
               })
            }
            {
               data.map( (product) =>{
                 if(category === 'All Products'){
                 return(
                     <ProductTag key={product.id} product={product}/>
                 )
               }else{console.log('now fetch the rest of data')}
               })
            }
            
          </Grid>
          </>
        }
      </Container>
    </Container>
  );
}

export default Home;
