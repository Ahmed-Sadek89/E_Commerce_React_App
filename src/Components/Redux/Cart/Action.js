import {add_product, remove_Item,Update_product, clear_All_products} from './Types';

export const add_product_fn = (id, product, total) =>{
    return {
        type: add_product,
        id,
        product,
        total,
    };
}

export const remove_Item_fn = (id) =>{
    return {
        type: remove_Item,
        id
    };
}

export const Update_product_fn = (id, newAmount) =>{
    return {
        type: Update_product,
        id,
        newAmount,
    };
}

export const clear_All_products_fn = () =>{
    return {
        type: clear_All_products
    };
}
