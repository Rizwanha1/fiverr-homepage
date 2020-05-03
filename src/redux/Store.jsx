
import { createStore } from 'redux';
import { combineReducers } from 'redux';


let cart = []
let order = [];

let gig = [
    {
        gigOwnerName: 'SellerName',
        gigOwnerTier: 'top seller',
        gigImages: [],
        gigTitle: 'i will do something like that',
        gigRate: 4,
        gigStartPrice: 1200,
        gigMainCatagory: 'logoDesign',
        gigSubCatagory: 'companyDesign',
        gigLikedBy: [],
        gigDescription: 'discription of offer',
        deliveryDays: 5,
        orders: [],
    },
]
// 'Digital Marketing',
// 'Graphics & Design',
// 'Writing & Translation',
// 'Video & Animation',
// 'Music & Audio',
// 'Programming & Tech',
// 'Business',
// 'Lifestyle',
// 'Trending',
let initialState = [
    ['Digital Marketing', [gig, gig, gig]],
    ['Graphics & Design', [gig, gig, gig]],
    ['Writing & Translation', [gig, gig, gig]],
    ['Video & Animation', [gig, gig, gig]],
    ['Music & Audio', [gig, gig, gig]],
    ['Programming & Tech', [gig, gig, gig]],
    ['Business', [gig, gig, gig]],
    ['Lifestyle', [gig, gig, gig]],
    ['Trending', [gig, gig, gig]],
]




const oderReducer = (state = order, orderProduct) => {
    state = [...state]
    if (orderProduct.type === "ORDER_ITEM") {
        const orderFlag = state.filter((pro) => {
            return pro.productName === orderProduct.product.productName ? true : false;
        })

        if ((orderFlag.length) === 0) {
            state.push(orderProduct.product)
        }
        console.log("order", state);
    }

    return state;
}



const cartReducer = (state = cart, cartProduct) => {
    state = [...state]
    if (cartProduct.type === "CART_ITEM") {
        const cartFlag = state.filter((pro) => {
            return pro.productName === cartProduct.product.productName ? true : false;
        })

        if ((cartFlag.length) === 0) {
            state.push(cartProduct.product)
        }
    }
    return state;
}










const displayerReducer = (dataSet = initialState, newDataSet) => {
    dataSet = [...dataSet]
    if (newDataSet.type === 'DEL_ITEM') {
        console.log('Deleter');
        dataSet.splice((newDataSet.index), 1)
        return [...dataSet]
    }
    return dataSet;

}


const deleterReducer = (dataSet = initialState, newDataSet) => {


    return dataSet;
}




const allReducers = combineReducers({ displayerReducer, deleterReducer, oderReducer, cartReducer })
export default createStore(allReducers);