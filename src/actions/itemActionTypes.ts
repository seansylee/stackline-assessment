export const FETCH_ITEM_START = "FETCH_ITEM_START";
export const FETCH_ITEM_SUCESS= "FETCH_ITEM_SUCESS";
export const FETCH_ITEM_FAIL= "FETCH_ITEM_FAIL";

export type itemSales = {
    weekEnding: string
    retailSales: number
    wholesaleSales: number
    unitsSold: number
    retailerMargin: number
}

export type itemReviews = {
    customer: string
    review: string
    score: number
}

export type itemData = {
    id: string
    title: string
    image: string
    subtitle: string
    brand: string
    reviews: itemReviews[]
    retailer: string
    details: string[]
    tags: string[]
    sales: itemSales[]
}


export interface FetchItemStart {
    type: typeof FETCH_ITEM_START,
}

export interface FetchItemSucess {
    type: typeof FETCH_ITEM_SUCESS,
    payload: itemData[]
}

export interface FetchItemFail{
    type: typeof FETCH_ITEM_FAIL,
}

export type ItemDispatchTypes = FetchItemStart | FetchItemSucess | FetchItemFail;