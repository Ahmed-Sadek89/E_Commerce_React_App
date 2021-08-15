import {add_product, remove_Item, clear_All_products, Update_product} from './Types';
import {format} from 'date-fns';

let productArray = null;

const Reducer = (state= [] ,action) =>{
    // add one item
    if(action.type === add_product)
    {
        productArray = [ ...state, { 
            type:action.type,
            product: action.product,
            amount1: action.amount1, 
            total1: action.total1,
            date: `created at ${format(new Date(), 'do MMMM Y')}`,
            id: Math.random()
        }];
        return productArray;
    }

    // update one item
    if(action.type === Update_product)
    {
        productArray = [ ...state, { 
            type:action.type,
            product: action.product,
            amount1: action.amount1, 
            total1: action.total1,
            date: `updated at ${format(new Date(), 'do MMMM Y')}`,
            id: Math.random()
        }];
        return productArray;
    }

    // remove selected item
    else if(action.type === remove_Item )
    {
        productArray = state.filter((product) => product.id !== action.id );
        return productArray;
    }
    // remove all item
    else if(action.type === clear_All_products )
    {
        productArray = [] ;
        return productArray;
    }
    // get state (empty or full becouse of one or more operation of redux)
    else{
        return state;
    }
};

export default Reducer;