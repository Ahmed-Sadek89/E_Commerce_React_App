import {add_product, remove_Item, clear_All_products, Update_product} from './Types';
import {format} from 'date-fns';

const CartReducer = (state = [] ,action) =>{
    switch(action.type){
        case add_product: 
            const isInCart = state.find(item => item.id === action.id ? true : false)
            state = isInCart ? state.map( item => item.id === action.id ? {
                ...item, 
                //product: item.product,  /// you don't need to add all object properties, just add what you need to update 
                //date: `created at ${format(new Date(), 'do MMMM Y')}`,
                //id: item.id,
                
                //amount: item.amount + 1, // update the amount and total_price 
                //total: item.total * (item.amount +1) ,
            }: item ) 
            :  
            [
                {
                    id: action.id,
                    product: action.product,
                    date: `created at ${format(new Date(), 'do MMMM Y')}`,
                    amount: 1 ,
                    total: action.total ,
                },
                ...state,
            ];
            return state
        
        case remove_Item:
            state = state.filter(item => item.id !== action.id); 
            return state

        case clear_All_products: 
            state = [];
            return state;

        case Update_product: 
            state = state.map(item => item.id === action.id ? {
                ...item, 
                amount: action.newAmount,
                total: (item.product.price * action.newAmount) ,
                date: `updated at ${format(new Date(), 'do MMMM Y')}`,
            } : item)
        
        default: return state
    }
};

export default CartReducer;