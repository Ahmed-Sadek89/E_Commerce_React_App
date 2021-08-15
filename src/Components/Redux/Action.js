import {add_product, remove_Item,Update_product, clear_All_products} from './Types';

export const add_product_fn = (product, amount1, total1) =>{
    const action = {
        type: add_product,
        product,
        amount1,
        total1,
    };
    //console.log('from action.js we update ',action)
    return action;
}

export const remove_Item_fn = (id) =>{
    const action = {
        type: remove_Item,
        id
    }
    //console.log('from action.js we remove ',action);
    return action;
}
export const Update_product_fn = (product, amount1, total1) =>{
    const action = {
        type: Update_product,
        product,
        amount1,
        total1,
    };
    //console.log('from action.js we add ',action)
    return action;
}

export const clear_All_products_fn = () =>{
    const action = {
        type: clear_All_products
    }
    //console.log('from action.js we cleared all product ',action);
    return action;
}
