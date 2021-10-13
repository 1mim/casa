import { GET_PRODUCTS_FAIL, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, GET_PRODUCT_DETAILS_FAIL, GET_PRODUCT_DETAILS_REQUEST, GET_PRODUCT_DETAILS_SUCCESS } from "../constants/productConstants";

export const getProductsReducer = (state = { loading: true, products: [] }, action) => {
    switch (action.type) {
        case GET_PRODUCTS_REQUEST:
            return {
                loading: true
            };
        case GET_PRODUCTS_SUCCESS:
            return {
                loading: false,
                products: action.payload,
            };
        case GET_PRODUCTS_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export const productDetailsReducer = (state = { product: {}, loading: true }, action) => {
    switch (action.type) {
        case GET_PRODUCT_DETAILS_REQUEST:
            return { loading: true };
        case GET_PRODUCT_DETAILS_SUCCESS:
            return { loading: false, product: action.payload };
        case GET_PRODUCT_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}