
import axios from 'axios';
import { GET_PRODUCTS_FAIL, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, GET_PRODUCT_DETAILS_FAIL, GET_PRODUCT_DETAILS_REQUEST, GET_PRODUCT_DETAILS_SUCCESS } from '../constants/productConstants';

export const listProducts = () => async (dispatch) => {
    dispatch({
        type: GET_PRODUCTS_REQUEST,
    });
    try {
        const { data } = await axios.get('/catalogues/');
        dispatch({
            type: GET_PRODUCTS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_PRODUCTS_FAIL,
            payload: error.message,
        })
    }
}

export const detailsProduct = (id) => async (dispatch) => {
    dispatch({ type: GET_PRODUCT_DETAILS_REQUEST, payload: id });
    try {
        const { data } = axios.get(`/catalogues/${id}`);
        dispatch({ type: GET_PRODUCT_DETAILS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: GET_PRODUCT_DETAILS_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}