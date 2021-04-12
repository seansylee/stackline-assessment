import { itemData, ItemDispatchTypes, FETCH_ITEM_START, FETCH_ITEM_SUCESS, FETCH_ITEM_FAIL } from "../actions/itemActionTypes"

interface IDefaultState {
    loading: boolean,
    item: itemData[]
};


const defaultState: IDefaultState = {
    loading: true,
    item: []
};

const itemReducer = (state: IDefaultState = defaultState, action: ItemDispatchTypes): IDefaultState => {
    switch(action.type){
        case FETCH_ITEM_START:
            return {
                ...state,
                loading: true 
            }
        case FETCH_ITEM_FAIL: 
            return {
                ...state,
                loading: false
            }
        case FETCH_ITEM_SUCESS:
            return {
                loading: false,
                item: action.payload
            }
        default:
            return {
                ...state,
                loading: true 
            }
    }

};

export default itemReducer;