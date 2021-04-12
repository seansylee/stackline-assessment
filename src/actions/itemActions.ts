
import { Dispatch } from "redux";
import { ItemDispatchTypes, FETCH_ITEM_START, FETCH_ITEM_SUCESS, FETCH_ITEM_FAIL } from "./itemActionTypes"
import  fetchItemData  from "../utils/api";

export const GetItem = () => async ( dispatch: Dispatch<ItemDispatchTypes> ) => {
    try {
        // "Start" the item fetch process -- to show loading state;
        dispatch({
            type: FETCH_ITEM_START 
        })

        // successfully retrieved data.
        const res = await fetchItemData();
        console.log(res);

        dispatch({
            type: FETCH_ITEM_SUCESS,
            payload: res
        })
    } catch (e) {
        
        // Though in the current design it will never fail,
        // I found it to be good practice.
        dispatch({
            type: FETCH_ITEM_FAIL
        })
    }

}